import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  items;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getDrugActions().subscribe(drugActions => this.items = drugActions);
  }

  revertDrugAction(id) {
    this.historyService.revertDrugAction(id).subscribe(() => {
      this.historyService.getDrugActions().subscribe(drugActions => this.items = drugActions);
    });
  }

}
