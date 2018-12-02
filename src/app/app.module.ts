import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DrugModule } from './modules/drug/drug.module';
import { AuthModule } from './modules/auth/auth.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { UserModule } from './modules/user/user.module';
import { OrderModule } from './modules/order/order.module';
import { HttpClientModule } from '@angular/common/http';
import { HistoryModule } from './modules/history/history.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DrugModule,
    AuthModule,
    UserModule,
    OrderModule,
    HistoryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
