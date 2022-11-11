import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeldDataStatsContainerComponent } from '../meldDataStats/meld-data-stats-container/meld-data-stats-container.component';
import { MeldDataStatsGridComponent } from '../meldDataStats/meld-data-stats-grid/meld-data-stats-grid.component';



@NgModule({
  declarations: [MeldDataStatsContainerComponent,MeldDataStatsGridComponent],
  imports: [
    CommonModule
  ],
  exports:[MeldDataStatsContainerComponent]
  
})
export class MeldDataStatsModule { }
