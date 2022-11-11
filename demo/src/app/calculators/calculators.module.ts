import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MeldCalculatorComponent } from './meld-calculator/meld-calculator.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { MeldCalculatorInputComponent } from './meld-calculator-input/meld-calculator-input.component';
import { MeldScoreOutputComponent } from './meld-score-output/meld-score-output.component';



@NgModule({
  declarations: [
    MeldCalculatorComponent,
    BmiCalculatorComponent,
    MeldCalculatorInputComponent,
    MeldScoreOutputComponent
  ],
  exports:[MeldCalculatorComponent,BmiCalculatorComponent],
  imports:[ReactiveFormsModule]
})
export class CalculatorsModule { }
