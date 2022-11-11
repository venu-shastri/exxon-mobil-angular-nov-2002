import {Component,Input} from '@angular/core'

@Component({
    templateUrl:'./greeter.component.html',
    styleUrls:['./greeter.component.css'],
    selector:"greeter"
})
export class GreeterComponent{

    @Input()
    message:string="angular";

}