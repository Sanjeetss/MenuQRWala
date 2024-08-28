import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenucardComponent } from './menucard/menucard.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menucard', component: MenucardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
