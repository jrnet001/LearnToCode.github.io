import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { GoogleChartsModule, ScriptLoaderService } from 'angular-google-charts';


@NgModule({
  declarations: [
    CountriesComponent

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    DashboardModule,
    GoogleChartsModule
  ],
  providers: [ScriptLoaderService],

})
export class CountriesModule { }
