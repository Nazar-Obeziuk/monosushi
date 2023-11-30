import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryPaymentRoutingModule } from './delivery-payment-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryPaymentComponent } from './delivery-payment.component';



@NgModule({
  declarations: [
    DeliveryPaymentComponent
  ],
  imports: [
    CommonModule,
    DeliveryPaymentRoutingModule,
    SharedModule
  ]
})
export class DeliveryPaymentModule { }