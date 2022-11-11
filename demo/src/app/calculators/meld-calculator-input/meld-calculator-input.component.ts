import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-meld-calculator-input',
  templateUrl: './meld-calculator-input.component.html',
  styleUrls: ['./meld-calculator-input.component.css']
})
export class MeldCalculatorInputComponent implements OnInit {

  inr:number=0;
  br:number=0;
  cr:number=0;
  sodium:number=0;

  @Output()
  meldcalculatorinputavailableevent=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  setInr(data:any){

    this.inr= parseInt( data);
 }
 setBr(data:any){
this.br=data;
 }
 setCr(data:any){
this.cr=data;
 }
 setSodium(data:any){
    this.sodium=data;
 }
 notifyContainer(){
   this.meldcalculatorinputavailableevent.emit({inr:this.inr,cr:this.cr,br:this.br,sodium:this.sodium});
 }
 clear(){

 }


}
