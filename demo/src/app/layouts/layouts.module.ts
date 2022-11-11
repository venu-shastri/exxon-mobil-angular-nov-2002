import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalPanelComponent } from './portal-panel/portal-panel.component';
import { NavComponent } from './nav/nav.component';
import { FeatureContainerComponent } from './feature-container/feature-container.component';



@NgModule({
  declarations: [
    PortalPanelComponent,
    NavComponent,
    FeatureContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
