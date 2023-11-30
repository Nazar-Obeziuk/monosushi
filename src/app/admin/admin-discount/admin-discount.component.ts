import { Component, OnInit } from '@angular/core';
import { Storage, deleteObject, getDownloadURL, percentage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { IDiscount, IDiscountResponse } from 'src/app/shared/interfaces/discount/discount.interface';
import { DiscountService } from 'src/app/shared/services/discount/discount.service';

@Component({
  selector: 'app-admin-discount',
  templateUrl: './admin-discount.component.html',
  styleUrls: ['./admin-discount.component.scss']
})
export class AdminDiscountComponent implements OnInit {

  public adminDiscounts: IDiscountResponse[] = [];
  public discountForm!: FormGroup;
  public editStatus = false;
  public currentDiscountId!: number | string;
  public isUploaded = false;
  public uploadPercent: number = 0;
  public isModalOpen = false;
  public date: Date = new Date();
  public discountDate: string = `${this.date.getMonth() + 1}.${this.date.getFullYear()}`;

  constructor(
    public discountService: DiscountService,
    private fb: FormBuilder,
    public storage: Storage
  ) {  }

  ngOnInit(): void {
    this.initDiscountForm();
    this.loadDiscounts();
  }

  changeDiscountModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  initDiscountForm(): void {
    this.discountForm = this.fb.group({
      name: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      imagePath: [null, Validators.required]
    })
  }
  
  loadDiscounts(): void {
    // this.discountService.getAll().subscribe(data => {
    //   this.adminDiscounts = data;
    // })
    this.discountService.getAllFirebase().subscribe(data => {
      this.adminDiscounts = data as IDiscountResponse[];
    })
  }

  addDiscount(): void {
    if (this.editStatus) {
      // this.discountService.update(this.discountForm.value, this.currentDiscountId).subscribe(() => {
      //   this.loadDiscounts();
      // })
      this.discountService.updateFirebase(this.discountForm.value, this.currentDiscountId as string).then(() => {
        this.loadDiscounts();
      })
    } else {
      // this.editStatus = false;
      // this.discountService.create(this.discountForm.value).subscribe(() => {
      //   this.loadDiscounts();
      // })
      this.editStatus = false;
      this.discountService.createFirebase(this.discountForm.value).then(() => {
        this.loadDiscounts();
      })
    }
    this.editStatus = false;
    this.discountForm.reset();
    this.isUploaded = false;
    this.uploadPercent = 0;
  }

  editDiscount(discount: IDiscountResponse): void {
    this.discountForm.patchValue({
      name: discount.name,
      title: discount.title,
      description: discount.description
    });
    this.editStatus = true;
    this.currentDiscountId = discount.id;
  }

  deleteDiscount(discount: IDiscountResponse): void {
    // this.discountService.delete(discount.id).subscribe(() => {
    //   this.loadDiscounts();
    // })
    this.discountService.deleteFirebase(discount.id as string).then(() => {
      this.loadDiscounts();
    })
  }

  upload(event: any): void {
    const file = event?.target.files[0];
    this.uploadFile('images', file.name, file)
      .then(data => {
        this.discountForm.patchValue({
          imagePath: data
        });
        this.isUploaded = true;
      })
      .catch (err => {
        console.log(err);
      })
  }

  async uploadFile(folder: string, name: string, file: File | null): Promise<string> {
    const path = `${folder}/${name}`;
    let url = '';
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        percentage(task).subscribe(data => {
          this.uploadPercent = data.progress;
        });
        await task;
        url = await getDownloadURL(storageRef);
      } catch (err: any) {
        console.log(err)
      }
    } else {
      console.log('wrong formatt of file');
    }
    return Promise.resolve(url);
  }

  deleteImage(): void {
    const task = ref(this.storage, this.valueByControl('imagePath'));
    deleteObject(task).then(() => {
      this.isUploaded = false;
      this.uploadPercent = 0;
      this.discountForm.patchValue({
        imagePath: null
      })
    })
  }

  valueByControl(control: string): string {
    return this.discountForm.get(control)?.value;
  }

}

