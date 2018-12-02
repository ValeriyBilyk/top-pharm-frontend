import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugService } from '../../modules/drug/drug.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private drugService: DrugService) { }

  ngOnInit() {
  }

  navigateToDrugs() {
    this.router.navigate(['/drugs'])
  }

  navigateToUsers() {
    this.router.navigate(['/users'])
  }

  navigateToOrders() {
    this.router.navigate(['/orders'])
  }

  navigateToStore() {
    this.router.navigate(['/store'])
  }

  navigateToOrderFormPage() {
    this.router.navigate(['/drugAction-form'])
  }

  navigateToHistoryPage() {
    this.router.navigate(['/history'])
  }

  getSelectedDrugsAmount() {

   return this.drugService.selectedDrugs && this.drugService.selectedDrugs.length;
  }

}
