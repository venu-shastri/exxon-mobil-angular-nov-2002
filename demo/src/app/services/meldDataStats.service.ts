import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class MeldDataStatsService{
    private meldDataModelList:any=[];
   private  meldDataModelStream=new Subject<any>();
   meldDataModelObservableStream=this.meldDataModelStream.asObservable();
    createNewMeldDataModel(data:any){
        this.meldDataModelList.push(data);
        this.meldDataModelStream.next(data);
    }

}