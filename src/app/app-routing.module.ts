import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import {DrugsPageComponent} from './modules/drug/drugs-page/drugs-page.component';
import {RegisterPageComponent} from './modules/auth/register-page/register-page.component';
import {LoginPageComponent} from './modules/auth/login-page/login-page.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {UserPageComponent} from './modules/user/user-page/user-page.component';
import {OrdersPageComponent} from './modules/order/orders-page/orders-page.component';
import {DrugsFormPageComponent} from './modules/drug/drugs-form-page/drugs-form-page.component';
import {StorePageComponent} from './modules/drug/store-page/store-page.component';
import {OrderFormPageComponent} from './modules/order/order-form-page/order-form-page.component';
import {HistoryPageComponent} from './modules/history/history-page/history-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        redirectTo: 'drugs',
        pathMatch: 'full'
      },
      {path: 'drugs', component: DrugsPageComponent},
      {path: 'users', component: UserPageComponent},
      {path: 'orders', component: OrdersPageComponent},
      {path: 'drugAction-form', component: OrderFormPageComponent},
      {path: 'drugs-form', component: DrugsFormPageComponent},
      {path: 'store', component: StorePageComponent},
      {path: 'history', component: HistoryPageComponent}
    ]
  },
  {path: 'account/register', component: RegisterPageComponent},
  {path: 'account/login', component: LoginPageComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
