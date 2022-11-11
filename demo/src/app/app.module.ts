import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GreeterComponent } from './greeter/greeter.component'
import { AppComponent } from './app.component'
import { UtilityModule } from './utility/utility.module'
import { CalculatorsModule } from './calculators/calculators.module'
import { AccountsModule } from './accounts/accounts.module'
import { MeldCalculatorService } from './services/meldCalculator.service'
import { ConsoleLoggerService } from './services/consoleLogger.service'
import { ApiLoggerService } from './services/apiLogger.service';
import { MeldDataStatsContainerComponent } from './meldDataStats/meld-data-stats-container/meld-data-stats-container.component';
import { MeldDataStatsGridComponent } from './meldDataStats/meld-data-stats-grid/meld-data-stats-grid.component'
import { MeldDataStatsModule } from './meld-data-stats/meld-data-stats.module'
import {Routes,RouterModule} from '@angular/router'
import { AccountsComponent } from './accounts/accounts.component'
import { LoginComponent } from './accounts/login/login.component'
import { SignupComponent } from './accounts/signup/signup.component'
import { LayoutsModule } from './layouts/layouts.module'
import { PortalPanelComponent } from './layouts/portal-panel/portal-panel.component'
import { AuthenticateGuard } from './authenticate.guard'

const pathConfiguartion:Routes=[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:AccountsComponent,children:[
        {path:"login",component:LoginComponent},
        {path:"signup",component:SignupComponent}
    ]},
    {path:"dashboard",component:PortalPanelComponent,canActivate:[AuthenticateGuard]}
];

@NgModule({
    declarations:[GreeterComponent,AppComponent],
    imports:[
        RouterModule.forRoot(pathConfiguartion),
        BrowserModule,
        UtilityModule,
        CalculatorsModule,
        AccountsModule,
        MeldDataStatsModule,
        LayoutsModule

        
    ],
    bootstrap:[AppComponent],
    providers:[
    MeldCalculatorService,
    
    {provide:"calculatorLogApiAddress",useValue:"http://em/calculators/log"},
    {provide:"accountsLogApiAddress",useValue:"http://em/accounts/log"}
    ]
})
export class AppModule{

}