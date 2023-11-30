import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductResponse } from '../../interfaces/product/product.interface';
import { environment } from 'src/environments/environment';
import { ProductService } from './product.service';
import { DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoResolver implements Resolve<DocumentData> {
  // private url = environment.BACKEND_URL;
  // private api = { products: `${this.url}/products` };

  constructor(
    // private http: HttpClient,
    private productService: ProductService
  ) {}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductResponse> {
  //   return this.http.get<IProductResponse>(`${this.api.products}/${route.paramMap.get('id')}`);
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productService.getOneFirebase(route.paramMap.get('id') as string);
  }
}
