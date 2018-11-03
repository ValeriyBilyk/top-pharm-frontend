import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DrugService {

  selectedDrugsIds = [];

  constructor(private http: HttpClient) { }

  getDrugs(params: any): Observable<any> {
    return this.http.get(`http://localhost:3100/api/v1/drugs`, {params: params.filters})
      .pipe();
  }

  addToPurchase(drugId) {
    this.selectedDrugsIds.push(drugId);
  }

  removeFromPurchases(drugId) {
    const index = this.selectedDrugsIds.indexOf(drugId);
    if (index > -1) {
      this.selectedDrugsIds.splice(index, 1);
    }
  }

  hasDrugInPurchases(drugId) {
    const index = this.selectedDrugsIds.indexOf(drugId);

    return index > -1;
  }

}
