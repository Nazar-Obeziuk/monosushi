import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  public editForm!: FormGroup;
  public currentUser: any;
  public isPersonalDataOpen = false;
  public isHistoryOrdersOpen = false;
  public isChangingPasswordOpen = false;
  
  constructor(
    public accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPersonalData();
    this.initEditForm();
  }

  initEditForm(): void {
    this.editForm = this.fb.group({
      firstName: [this.currentUser?.firstName, Validators.required],
      lastName: [this.currentUser?.lastName, Validators.required],
      phone: [this.currentUser?.phone, Validators.required],
      email: [this.currentUser?.email, Validators.required],
    });
  }

  // getPersonalData(): void {
  //   const currentUserString = localStorage.getItem('currentUser');
  //   if (currentUserString) {
  //     this.currentUser = JSON.parse(currentUserString);
  //   }
  // }

  getPersonalData(): void {
    const currentUserString = localStorage.getItem('currentUser');
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : undefined;
  }

  togglePersonalData(): void {
    this.isPersonalDataOpen = !this.isPersonalDataOpen;
    this.isHistoryOrdersOpen = false;
    this.isChangingPasswordOpen = false;
  }

  toggleHistoryOrders(): void {
    this.isHistoryOrdersOpen = !this.isHistoryOrdersOpen;
    this.isPersonalDataOpen = false;
    this.isChangingPasswordOpen = false;
  }
  toggleChangePassword(): void {
    this.isChangingPasswordOpen = !this.isChangingPasswordOpen;
    this.isHistoryOrdersOpen = false;
    this.isPersonalDataOpen = false;
  }

  logout(): void {
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
    this.accountService.isUserLogin$.next(true);
  }

  editPersonalData(): void {
    const currentUserDataStr = localStorage.getItem('currentUser');

    if (currentUserDataStr) {
      const currentUserData = JSON.parse(currentUserDataStr);
      Object.assign(currentUserData, this.editForm.value);
      localStorage.setItem('currentUser', JSON.stringify(currentUserData));
      this.accountService.updateUserData(currentUserData.uid, this.editForm.value)
        // .then(() => this.toastr.success('Ваші дані успішно оновленні'))
        .then(() => console.log('success'))
        .catch(err => console.error(err));
      this.accountService.isUserLogin$.next(true);
    }
  }

}
