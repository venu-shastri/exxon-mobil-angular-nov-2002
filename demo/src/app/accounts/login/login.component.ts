import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiLoggerService } from 'src/app/services/apiLogger.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[{provide:"logger",useClass:ApiLoggerService},{provide:"logApiAddress",useValue:"http://em.com/accounts/log"}]

})
export class LoginComponent implements OnInit {

  constructor(private routerService:Router) { }
  login(formRef:FormGroup){

    console.log(formRef);
    //WebApi
    //Login Success
    //Navigate -> dashboard
    this.routerService.navigate(["dashboard"]);
  }

  ngOnInit(): void {
  }

}
