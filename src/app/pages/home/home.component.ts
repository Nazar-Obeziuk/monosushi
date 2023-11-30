import { Component, OnInit } from '@angular/core';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeProducts: IProductResponse[] = [];

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getAllHomeProducts();
  }
  
  getAllHomeProducts(): void {
    this.productService.getAllFirebase().subscribe(data => {
      const roles = data.filter(el => el['category'].name.toLowerCase() === 'роли');
      roles.sort((a, b) => a['name'].localeCompare(b['name']));
      this.homeProducts = roles as IProductResponse[];
    })
  }

}
