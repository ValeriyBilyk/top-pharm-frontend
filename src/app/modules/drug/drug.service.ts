import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DrugService {

  selectedDrugs = [];

  constructor(private http: HttpClient) { }

  postDrugAction({body, params = {filters: {}}}) {

    return this.http.post(`http://localhost:3100/api/v1/drug-actions`, body, {params: params.filters}).pipe();
  }

  postDrug({body, params = {filters: {}}}) {

    return this.http.post(`http://localhost:3100/api/v1/drugs`, body, {params: params.filters}).pipe();
  }

  getDrugs(params: any): Observable<any> {
    return this.http.get(`http://localhost:3100/api/v1/drugs`, {params: params.filters})
      .pipe();
  }

  addToPurchase(drug) {
    const index = this.selectedDrugs.map(selectedDrug => selectedDrug._id).indexOf(drug._id);
    if (index === -1) {
      this.selectedDrugs.push(drug);
    }
  }

  removeFromPurchases(drug) {
    const index = this.selectedDrugs.map(selectedDrug => selectedDrug._id).indexOf(drug._id);
    if (index > -1) {
      this.selectedDrugs.splice(index, 1);
    }
  }

  hasDrugInPurchases(drug) {
    const index = this.selectedDrugs.map(selectedDrug => selectedDrug._id).indexOf(drug._id);

    return index > -1;
  }

}
