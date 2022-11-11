import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meld-data-stats-grid',
  templateUrl: './meld-data-stats-grid.component.html',
  styleUrls: ['./meld-data-stats-grid.component.css']
})
export class MeldDataStatsGridComponent implements OnInit {

  @Input()
  statsDataList:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
