import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {

  items = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDrugsForm() {
    this.router.navigate(['/drugs-form'])
  }

}
