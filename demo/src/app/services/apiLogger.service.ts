import { Inject,Injectable } from "@angular/core";
import { ILogger } from "./logger.contract";

@Injectable()
export class ApiLoggerService implements ILogger{
    constructor(@Inject("logApiAddress")private url:string){
        console.log("ApiLoggerService Instantiated");
    }
    writeLog(message: string): void {
        this.write(message);
    }
    write(message:string):void
{
    console.log("AppiLogging...",this.url,message);
}}