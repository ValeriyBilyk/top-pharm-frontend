import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import {DrugsPageComponent} from './modules/drug/drugs-page/drugs-page.component';
import {RegisterPageComponent} from './modules/auth/register-page/register-page.component';
import {LoginPageComponent} from './modules/auth/login-page/login-page.component';

const appRoutes: Routes = [
  {path: 'drugs', component: DrugsPageComponent},
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
