import { ILogger } from "./logger.contract";

export class ConsoleLoggerService implements ILogger{
    constructor(){
        console.log("ConsoleLoggerService Instantiated");
    }
    writeLog(message: string): void {
        this.write(message);
    }
    write(message:string):void
{
    console.log(message);
}}