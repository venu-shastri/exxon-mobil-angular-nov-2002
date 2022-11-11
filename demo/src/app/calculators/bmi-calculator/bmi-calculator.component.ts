import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  bmiDataModel:FormGroup=new FormGroup({
    height:new FormControl(),
    weight:new FormControl()
  })
 
 
  constructor() { }

  ngOnInit(): void {
  }
  calculateBmi(){
console.log(this.bmiDataModel.value);
  }
  reset(){

  }

}
