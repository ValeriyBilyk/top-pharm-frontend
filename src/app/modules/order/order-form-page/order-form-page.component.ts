import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {DrugService} from '../../drug/drug.service';
import {AuthService} from '../../auth/auth.service';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.scss']
})
export class OrderFormPageComponent implements OnInit {

  form = this.fb.group({
    purchases: this.fb.array([])
  });

  get purchases() {
    return this.form.get('purchases') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private drugService: DrugService,
              private orderService: OrderService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.drugService.selectedDrugs.forEach((drug) => this.addPurchase(drug))
  }

  addPurchase(drug) {
    this.purchases.push(this.fb.group({
      drugId: drug._id,
      name: drug.name,
      value: this.fb.control('1')
    }));
  }

  getValue(formGroup, property) {

    return formGroup.controls[property].value;
  }

  onSubmit() {
    const unhandledPurchases = this.form.value.purchases;
    const actions = unhandledPurchases && unhandledPurchases.map(item => {return {drug: item.drugId, amount: item.value}});
    if (actions && actions.length) {
      const body = {actions, user: this.authService.userData.userInfo.id, type: 'order'};
      this.orderService.postOrder({body}).subscribe(() => {
        this.drugService.selectedDrugs = [];
        this.router.navigate(['']);
      });
      console.log(body);
    }
  }
}
