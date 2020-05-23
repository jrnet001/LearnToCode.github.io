import { DateWiseData } from './../../model/date-wise-data';
import { GlobalDataSummary } from './../../model/global-data';
import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public totalActive = 0;
  public totalConfirmed = 0;
  public totalDeaths = 0;
  public totalRecovered = 0;
  public globalDataSummary: GlobalDataSummary[];

  public countries: string[] = [];
  dateWiseData;
  loading = true;
  selectedCountryData: DateWiseData[];
  dataTable = [];

  options: {
    height: 500,
    animation: {
      duration: 1000,
      easing: 'out',
    },
  };

  public chart = {
    PieChart: "PieChart",
    ColumnChart: 'ColumnChart',
    LineChart: "LineChart",
    height: 500,
    options: {
      animation: {
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }
  };


  constructor(public dataService: DataServiceService) { }

  ngOnInit() {


    merge(
      this.dataService.getDateWiseData().pipe(
        map(result => {
          this.dateWiseData = result;
          //console.log(result);          
        })
      ),
      this.dataService.getGlobalData().pipe(
        map(result => {
//          console.log('my results', result);
          this.globalDataSummary = result;
          this.globalDataSummary.forEach(cs => {
            this.countries.push(cs.country);
          });
        }))
    ).subscribe(
      {
        complete: () => {
          this.updateValues('US');
          this.loading = false;
        }
      }
    )
  }

  updateChart() {
    this.dataTable = [];
    //this.dataTable.push(["Date", 'Cases'])
    this.selectedCountryData.forEach(cs => {
      this.dataTable.push([cs.date, cs.cases]);
    })
  }


  updateValues(country: string) {
  //  console.log(country);
    this.globalDataSummary.forEach(row => {
      if (country === row.country) {
        this.totalActive += row.active;
        this.totalConfirmed += row.confirmed;
        this.totalDeaths += row.deaths;
        this.totalRecovered += row.recovered;
      }
    });

    this.selectedCountryData = this.dateWiseData[country]
    // console.log(this.selectedCountryData);
    this.updateChart();
  }
}
