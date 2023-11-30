import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscountResponse } from 'src/app/shared/interfaces/discount/discount.interface';
import { DiscountService } from 'src/app/shared/services/discount/discount.service';

@Component({
  selector: 'app-discount-info',
  templateUrl: './discount-info.component.html',
  styleUrls: ['./discount-info.component.scss']
})
export class DiscountInfoComponent implements OnInit {

  public discount!: IDiscountResponse;

  constructor(
    public discountService: DiscountService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOneDiscount();
    // this.activatedRoute.data.subscribe(response => {
    //   this.discount = response['discountInfo'] as IDiscountResponse;
    // });
    // this.createList();
  }

  getOneDiscount(): void {
    const DISCOUNT_ID = this.activatedRoute.snapshot.paramMap.get('id');
    this.discountService.getOneFirebase(DISCOUNT_ID as string).subscribe(data => {
      this.discount = data as IDiscountResponse;
    })
  }

}
