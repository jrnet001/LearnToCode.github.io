import { DataServiceService } from './services/data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { GoogleChartsModule, ScriptLoaderService } from 'angular-google-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // DashboardComponent,
    // HomeComponent,
    // CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   // GoogleChartsModule
   // Ng2GoogleChartsModule
  ],
  providers: [
  //  ScriptLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
