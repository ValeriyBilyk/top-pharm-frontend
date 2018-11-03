import { Component, OnInit } from '@angular/core';
import { DrugService } from '../drug.service';

@Component({
  selector: 'app-drugs-page',
  templateUrl: './drugs-page.component.html',
  styleUrls: ['./drugs-page.component.scss']
})
export class DrugsPageComponent implements OnInit {

  items = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private drugService: DrugService) { }

  ngOnInit() {
    this.getDrugs();
  }

  getDrugs() {
    this.drugService.getDrugs({}).subscribe((res) => console.log(res))
  }

  getPurchaseState(drugId) {

    return this.drugService.hasDrugInPurchases(drugId) ? 'Remove from purchases' : 'Add to purchases';
  }

  handlePurchaseAction(drugId) {
    this.drugService.hasDrugInPurchases(drugId)
      ? this.drugService.removeFromPurchases(drugId)
      : this.drugService.addToPurchase(drugId);
  }

}
