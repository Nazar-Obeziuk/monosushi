import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  
  { 
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'discount',
    loadChildren: () => import('./pages/discount/discount.module').then(m => m.DiscountModule)  
  },
  { 
    path: 'product', 
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)   
  },
  { 
    path: 'delivery-payment', 
    loadChildren: () => import('./pages/delivery-payment/delivery-payment.module').then(m => m.DeliveryPaymentModule)   
  },
  { 
    path: 'about', 
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)   
  },
  // { 
  //   path: 'oferta',
  //   loadChildren: () => import('./pages/oferta/oferta.module').then(m => m.OfertaModule)   
  // },
  { 
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)   
  },
  { 
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)   
  },
  { 
    path: 'auth',
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)   
  },
  { 
    path: 'cabinet',
    loadChildren: () => import('./pages/cabinet/cabinet.module').then(m => m.CabinetModule)   
  },
  { 
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
