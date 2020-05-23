import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, CountUpModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
