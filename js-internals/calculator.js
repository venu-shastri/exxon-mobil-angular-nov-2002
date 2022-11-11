var xmobi=(function(){function Calculator(arg1,arg2){

    this.operand1=arg1;
    this.operand2=arg2;
    this.result=0;
  //  this

}

Calculator.prototype.add=function(){ this.result=this.operand1+this.operand2;}
var xmobi=new Object();
xmobi.Calculator=Calculator;
return xmobi;
})();
