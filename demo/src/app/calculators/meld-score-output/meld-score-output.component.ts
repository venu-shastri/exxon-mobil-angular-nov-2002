import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meld-score-output',
  templateUrl: './meld-score-output.component.html',
  styleUrls: ['./meld-score-output.component.css']
})
export class MeldScoreOutputComponent implements OnInit {


  @Input() // read-only
  meldScore:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
