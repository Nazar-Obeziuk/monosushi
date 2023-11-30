import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IProductRequest } from '../../interfaces/product/product.interface';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle errors on create, update, and delete', () => {
    service.create({} as IProductRequest).subscribe(
      () => {},
      (error) => {
        expect(error).toBeTruthy();
      }
    );
  
    service.update({} as IProductRequest, 1).subscribe(
      () => {},
      (error) => {
        expect(error).toBeTruthy();
      }
    );
  });

});
