import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DrugService } from '../drug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drugs-form-page',
  templateUrl: './drugs-form-page.component.html',
  styleUrls: ['./drugs-form-page.component.scss']
})
export class DrugsFormPageComponent {

  form = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    type: ['', Validators.required],
    amount: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private drugService: DrugService, private router: Router) { }

  onSubmit() {
    console.log(this.form.value);
    this.drugService.postDrug({body: this.form.value}).subscribe(res => this.router.navigate(['']));
  }

}
