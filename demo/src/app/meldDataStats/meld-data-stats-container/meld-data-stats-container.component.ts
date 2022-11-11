import { Component, OnInit } from '@angular/core';
import { MeldDataStatsService } from 'src/app/services/meldDataStats.service';

@Component({
  selector: 'app-meld-data-stats-container',
  templateUrl: './meld-data-stats-container.component.html',
  styleUrls: ['./meld-data-stats-container.component.css']
})
export class MeldDataStatsContainerComponent implements OnInit {
statsHistory:any=[];
  constructor(private statsService:MeldDataStatsService) {
    //this.onStatsStreamChange=this.onStatsStreamChange.bind(this);
   }

  ngOnInit(): void {
    //let _this=this;
  this.statsService.meldDataModelObservableStream.subscribe((statsData:any)=>{
    this.statsHistory.push(statsData);
  });
  

  // function onStatsStreamChange(statsData:any){
  //     _this.statsHistory.push(statsData);
  // }
}

}
