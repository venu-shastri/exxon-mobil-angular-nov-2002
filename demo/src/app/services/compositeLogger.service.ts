import { ApiLoggerService } from "./apiLogger.service";
import { ConsoleLoggerService } from "./consoleLogger.service";
import { ILogger } from "./logger.contract";

export class CompositeLoggerService implements ILogger{

    loggerList=new Array<ILogger>();
    constructor(){
        this.loggerList.push(new ConsoleLoggerService());
        this.loggerList.push(new ApiLoggerService(""));
    }
    writeLog(message: string): void {
        
        for(let i=0;i<this.loggerList.length;i++){
            this.loggerList[i].writeLog(message); //mutlicasting 
        }
    }

}