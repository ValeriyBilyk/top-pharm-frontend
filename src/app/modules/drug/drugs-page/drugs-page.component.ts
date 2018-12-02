import { Component, OnInit } from '@angular/core';
import { DrugService } from '../drug.service';

@Component({
  selector: 'app-drugs-page',
  templateUrl: './drugs-page.component.html',
  styleUrls: ['./drugs-page.component.scss']
})
export class DrugsPageComponent implements OnInit {

  items = [];

  constructor(private drugService: DrugService) { }

  ngOnInit() {
    this.getDrugs();
  }

  getDrugs() {
    this.drugService.getDrugs({}).subscribe((res) => this.items = res)
  }

  getPurchaseState(drug) {

    return this.drugService.hasDrugInPurchases(drug) ? 'Remove from purchases' : 'Add to purchases';
  }

  handlePurchaseAction(drug) {
    this.drugService.hasDrugInPurchases(drug)
      ? this.drugService.removeFromPurchases(drug)
      : this.drugService.addToPurchase(drug);
  }

}
