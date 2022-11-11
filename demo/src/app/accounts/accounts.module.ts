import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AccountsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[LoginComponent,SignupComponent,AccountsComponent]
})
export class AccountsModule { }
