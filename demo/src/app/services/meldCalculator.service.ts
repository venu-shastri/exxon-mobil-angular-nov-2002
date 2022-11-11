import { Inject, Injectable } from "@angular/core";
import { ILogger } from "./logger.contract";

@Injectable()
export class MeldCalculatorService{
    constructor(@Inject("logger") private loggerRef:ILogger){

    }
    calculateMeldScore(inr:number,sodium:number,cr:number,br:number):number{
        this.loggerRef.writeLog("calculateMeldScore called");
        return inr+sodium+cr+br;


    }
}