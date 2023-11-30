import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from '@angular/fire/auth';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROLE } from 'src/app/shared/constants/role.constant';
import { AccountService } from 'src/app/shared/services/account/account.service';
// import { ToastrService } from 'ngx-toastr';

export interface IRegister {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmationPassword?: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public total = 0;
  public basket: IProductResponse[] = [];
  public isModalOpen = false;
  public isBasketOpen = false;
  public isLoginModalOpen = false;
  public authForm!: FormGroup;
  public loginSubscription!: Subscription;
  public isSignIn = false;
  public isCallModalOpen = false;
  public isCorrectPassword = false;
  private registerData!: IRegister;

  constructor(
    private orderService: OrderService,
    private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router,
    private auth: Auth,
    private afs: Firestore,
    // private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
    this.initAuthForm();
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  openModalMenu(): void {
    this.isModalOpen = true;
  }

  closeModalMenu(): void {
    this.isModalOpen = false;
  }

  openBasketModal(): void {
    this.isBasketOpen = !this.isBasketOpen;
  }

  openDialogModal(): void {
    this.isLoginModalOpen = !this.isLoginModalOpen;
  }

  initAuthForm(): void {
    this.authForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmationPassword: [null, Validators.required]
    })
  }

  openCallDialog(): void {
    this.isCallModalOpen = !this.isCallModalOpen;
  }

  countOfProduct(basketProduct: IProductResponse, value: boolean): void {
    if (value) {
      ++basketProduct.count;
      this.getTotalPrice();
    } else if (!value && basketProduct.count > 1) {
      --basketProduct.count;
      this.getTotalPrice();
    }
  }

  deleteProductFromBasket(productBasketIndex: number): void {
    this.basket.splice(productBasketIndex, 1);
    this.updateBasket();
    this.getTotalPrice();
    let storedBasket = JSON.parse(localStorage.getItem('basket') || '[]');
    storedBasket.splice(productBasketIndex, 1);
    localStorage.setItem('basket', JSON.stringify(storedBasket));
  }

  loadBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
    }
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.total = this.basket.reduce((total: number, prod: IProductResponse) => total + prod.price * prod.count, 0)
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    })
  }

  toggleLoginModal(): void {
    this.isLoginModalOpen = !this.isLoginModalOpen;
  }

  toggleRegistration(): void {
    this.isSignIn = !this.isSignIn;
  }

  loginUser(): void {
    const { email, password } = this.authForm.value;
    this.login(email, password).then(() => {
      // this.toastr.success('Ви успішно увійшли');
      this.authForm.reset();
      this.isLoginModalOpen = false;
    }).catch(err => {
      // this.toastr.error(err.message);
    })
  }

  async login(email: string, password: string): Promise<void> {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    this.loginSubscription = docData(doc(this.afs, 'users', credential.user.uid)).subscribe({
      next: (user) => {
        const currentUser = { ...user, uid: credential.user.uid };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        if (user && user['role'] === ROLE.USER) {
          this.router.navigate(['./cabinet']);
        }
        this.accountService.isUserLogin$.next(true);
      },
      error: (err) => {
        console.log(err.code, err.message);
      }
    })
  }

  registerUser(): void {
    const { firstName, lastName, phone, email, password, confirmationPassword } = this.authForm.value;
    this.registerData = this.authForm.value;
    this.emailSignUp(firstName, lastName, phone, email, password, confirmationPassword).then(() => {
      // this.toastr.success('Ви успішно зареєструвалися');
      this.isSignIn = !this.isSignIn;
      this.authForm.reset();
    }).catch(err => {
      // this.toastr.error(err.message);
    })
  }

  async emailSignUp(firstName: string, lastName: string, phone: string, email: string, password: string, confirmationPassword: string): Promise<any> {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    const user = {
      firstName: this.registerData.firstName,
      lastName: this.registerData.lastName,
      phone: this.registerData.phone,
      email: credential.user.email,
      password: this.registerData.password,
      confirmationPassword: this.registerData.confirmationPassword,
      order: [],
      role: 'USER'
    };

    setDoc(doc(this.afs, 'users', credential.user.uid), user);

    await credential.user.reload();
  }

  checkConfirmPassword(): void {
    this.isCorrectPassword = this.password.value === this.confirmPassword.value;
    if (this.password.value !== this.confirmPassword.value) {
      this.authForm.controls['confirmationPassword'].setErrors({
        matchError: 'Пароль не співпадає з минулим'
      })
    }
  }

  get password(): AbstractControl {
    return this.authForm.controls['password'];
  }

  get confirmPassword(): AbstractControl {
    return this.authForm.controls['confirmationPassword'];
  }

  checkVisibilityError(control: string, name: string): boolean | null {
    return this.authForm.controls[control].errors?.[name]
  }

}
