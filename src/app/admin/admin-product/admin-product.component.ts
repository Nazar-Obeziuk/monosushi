import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoryResponse } from 'src/app/shared/interfaces/category/category.interface';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ImageService } from 'src/app/shared/services/image/image.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  public adminCategories: ICategoryResponse[] = [];
  public adminProducts: IProductResponse[] = [];
  public productForm!: FormGroup;
  public editStatus = false;
  public uploadPercent = 0;
  public isUploaded = false;
  public isFormOpen = false;
  public currentCategoryId!: number | string;
  public currentProductId = 0;

  constructor(
    private categoryService: CategoryService,
    public productService: ProductService,
    private imageService: ImageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initProductForm();
    this.loadCategories();
    this.loadProducts();
  }

  toggleProductForm(): void {
    this.isFormOpen = !this.isFormOpen;
  }

  initProductForm(): void {
    this.productForm = this.fb.group({
      category: [null, Validators.required],
      name: [null, Validators.required],
      path: [null, Validators.required],
      ingredients: [null, Validators.required],
      weight: [null, Validators.required],
      price: [null, Validators.required],
      imagePath: [null, Validators.required],
      count: [1]
    })
  }

  loadCategories(): void {
    // this.categoryService.getAll().subscribe(data => {
    //   this.adminCategories = data;
    //   this.productForm.patchValue({
    //     category: this.adminCategories[0].id
    //   });
    // });
    this.categoryService.getAllFirebase().subscribe(data => {
      this.adminCategories = data as ICategoryResponse[];
      this.productForm.patchValue({
        category: this.adminCategories[0].id
      });
    });
  }

  loadProducts(): void {
    // this.productService.getAll().subscribe(data => {
    //   this.adminProducts = data;
    // });
    this.productService.getAllFirebase().subscribe(data => {
      this.adminProducts = data as IProductResponse[];
    });
  }

  addProduct(): void {
    if (this.editStatus) {
      // this.productService.update(this.productForm.value, this.currentCategoryId).subscribe(() => {
        //   this.loadProducts();
        //   this.isFormOpen = false;
        //   this.editStatus = false;
        // })
      this.productService.updateFirebase(this.productForm.value, this.currentCategoryId as string).then(() => {
        this.productForm.value.count = 1;
        this.loadProducts();
        this.isFormOpen = false;
        this.editStatus = false;
      })
    } else {
      // this.productService.create(this.productForm.value).subscribe(() => {
      //   this.loadProducts();
      //   this.productForm.reset();
      //   this.isFormOpen = false;
      //   this.isUploaded = false;
      //   this.editStatus = false;
      // })
      this.productService.createFirebase(this.productForm.value).then(() => {
        this.loadProducts();
        this.productForm.reset();
        this.productForm.value.count = 1;
        this.isFormOpen = false;
        this.isUploaded = false;
        this.editStatus = false;
      })
    }
  }

  editProduct(product: IProductResponse): void {
    this.productForm.patchValue({
      category: product.category,
      name: product.name,
      path: product.path,
      ingredients: product.ingredients,
      weight: product.weight,
      price: product.price,
      imagePath: product.imagePath
    });
    this.isFormOpen = true;
    this.isUploaded = true;
    this.editStatus = true;
    this.currentCategoryId = product.id;
  }

  deleteProduct(product: IProductResponse): void {
    // this.productService.delete(product.id).subscribe(() => {
    //   this.loadProducts();
    // })
    this.productService.deleteFirebase(product.id as string).then(() => {
      this.loadProducts();
    })
  }

  upload(event: any): void {
    const file = event.target.files[0];
    this.imageService.uploadFile('images', file.name, file)
      .then(data => {
        this.productForm.patchValue({
          imagePath: data
        });
        this.isUploaded = true;
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteImage(): void {
    this.imageService.deleteUploadFile(this.valueByControl('imagePath'))
      .then(() => {
        this.isUploaded = false;
        this.uploadPercent = 0;
        this.productForm.patchValue({
          imagePath: null
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  valueByControl(control: string): string {
    return this.productForm.get(control)?.value;
  }

}
