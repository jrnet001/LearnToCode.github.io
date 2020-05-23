import { DashboardModule } from './../dashboard/dashboard.module';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GoogleChartsModule, ScriptLoaderService } from 'angular-google-charts';


@NgModule({
  declarations: [HomeComponent
  //  , DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DashboardModule,
    GoogleChartsModule
  ],
  providers: [ScriptLoaderService],

})
export class HomeModule { }
