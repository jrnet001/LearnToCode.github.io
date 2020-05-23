import { GlobalDataSummary } from './../../model/global-data';
import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ViewChild('googleChart', { static: true }) googleChart: GoogleChartComponent;

  public totalActive = 0;
  public totalConfirmed = 0;
  public totalDeaths = 0;
  public totalRecovered = 0;
  public globalDataSummary: GlobalDataSummary[];
  loading = true;

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

  dataTable = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getGlobalData()
      .subscribe(
        {
          next: (result) => {
            //  console.log(result);
            this.globalDataSummary = result;
            result.forEach(row => {
              if (!Number.isNaN(row.confirmed)) {
                this.totalActive += row.active;
                this.totalConfirmed += row.confirmed;
                this.totalDeaths += row.deaths;
                this.totalRecovered += row.recovered;
              }
            });
            this.initChart('c');
          },
          complete: () => {
            this.loading = false;
          }
        }
      );
  }

  initChart(caseType: string) {

    this.dataTable = [];

    //dataTable.push(['Country', 'Cases']);

    this.globalDataSummary.forEach(row => {
      let value: number;

   //   console.log(caseType);

      switch (caseType) {
        case 'a':
          value = row.active;
          break;
        case 'c':
          value = row.confirmed;
          break;
        case 'd':
          value = row.deaths;
          break;
        case 'r':
          value = row.recovered;
          break;
        default:
          value = 0;
      }

      if (row.country) {
        if (row.confirmed > 2000) {
          //      console.log(row.country, value);
          this.dataTable.push([row.country, value]);
        }
      }
    });


  //  console.log(this.dataTable);


  }

  updateChart(input: HTMLInputElement) {
    this.initChart(input.value);
  }
}

