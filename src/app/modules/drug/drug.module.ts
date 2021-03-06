import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsPageComponent } from './drugs-page/drugs-page.component';
import { DrugsFormPageComponent } from './drugs-form-page/drugs-form-page.component';
import { DrugService } from './drug.service';
import { StorePageComponent } from './store-page/store-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    DrugsPageComponent,
    DrugsFormPageComponent,
    StorePageComponent
  ],
  providers: [DrugService]
})
export class DrugModule { }
