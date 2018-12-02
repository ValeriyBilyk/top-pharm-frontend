import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HistoryService } from './history.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HistoryPageComponent],
  providers: [HistoryService]
})
export class HistoryModule { }
