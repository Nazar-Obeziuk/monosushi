import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutModuleRoutingModule } from './checkout-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutComponent } from './checkout.component';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutModuleRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }