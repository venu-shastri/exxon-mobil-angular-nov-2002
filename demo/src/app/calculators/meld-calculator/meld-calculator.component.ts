import { Component, OnInit,Inject } from '@angular/core';

import { ILogger } from 'src/app/services/logger.contract';
import { MeldCalculatorService } from 'src/app/services/meldCalculator.service';
import { MeldDataStatsService } from 'src/app/services/meldDataStats.service';

@Component({
  selector: 'meld-calculator',
  templateUrl: './meld-calculator.component.html',
  styleUrls: ['./meld-calculator.component.css']
})
export class MeldCalculatorComponent{

  meldScoreValue:number=0;
  constructor(private meldCalcServiceRef:MeldCalculatorService,
   @Inject("logger") private loggerRef:ILogger,private statsService:MeldDataStatsService ) { }

   
   setMeldInputVitals(vitals:any){
     this.calculateMeldScore(vitals);
      
   }
   calculateMeldScore(vitals:any){
     this.meldScoreValue=this.meldCalcServiceRef.calculateMeldScore(vitals.inr,vitals.sodium,vitals.cr,vitals.br);
   this.statsService.createNewMeldDataModel(
     {...vitals,meldScore:this.meldScoreValue,timestamp:Date.now()})
    }

}
