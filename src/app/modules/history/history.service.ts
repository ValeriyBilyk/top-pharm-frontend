import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HistoryService {

  constructor(private http: HttpClient) { }

  getDrugActions() {

    return this.http.get(`http://localhost:3100/api/v1/drug-actions`).pipe();
  }

  revertDrugAction(id) {

    return this.http.delete(`http://localhost:3100/api/v1/drug-actions/${id}`).pipe();
  }
}
