import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPaymentComponent } from './delivery-payment.component';

describe('DeliveryPaymentComponent', () => {
  let component: DeliveryPaymentComponent;
  let fixture: ComponentFixture<DeliveryPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryPaymentComponent]
    });
    fixture = TestBed.createComponent(DeliveryPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
