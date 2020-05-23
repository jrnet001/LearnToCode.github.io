import { DateWiseData } from './../model/date-wise-data';
import { GlobalDataSummary } from './../model/global-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private extention = '.csv';
  public month: number;
  public day: number;
  public year: number;

  private DateWiseDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`;
  private baseDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
  private DataUrl: string;

  private now: Date;

  getDate(date: number) {
    // if (date < 10) {
    //   return '0' + date;
    // }
    // return date;

    return date < 10 ? '0' + (date) : (date).toString();

  }

  setDatesString() {
    this.month = this.now.getMonth() + 1;
    this.day = this.now.getDate();
    this.year = this.now.getFullYear();
  }

  constructor(private http: HttpClient) {
    this.now = new Date();
    this.setDatesString();
    this.DataUrl = `${this.baseDataUrl}${this.getDate(this.month)}-${this.getDate(this.day)}-${this.year}${this.extention}`;
  }

  getDateWiseData() {
    return this.http.get(this.DateWiseDataUrl, { responseType: 'text' })
      .pipe(map(result => {
        let rows = result.split('\n');
        // console.log(rows);
        let mainData = {};
        let header = rows[0];
        let dates = header.split(/,(?=\S)/);
        dates.splice(0, 4);
        rows.splice(0, 1);
        rows.forEach(row => {
          let cols = row.split(/,(?=\S)/);
          let con = cols[1];
          cols.splice(0, 4);
          // console.log(con , cols);
          mainData[con] = [];
          cols.forEach((value, index) => {
            let dw: DateWiseData = {
              cases: +value,
              country: con,
              date: new Date(Date.parse(dates[index]))
            }
            mainData[con].push(dw);
          });

        });
        // console.log(mainData);
        return mainData as GlobalDataSummary[];
      }));
  }

  getGlobalData(): Observable<GlobalDataSummary[]> {
    return this.http.get(this.DataUrl, { responseType: 'text' })
      .pipe(
        map(
          result => {

            let data: GlobalDataSummary[] = [];

            let raw = {};

            let rows = result.split('\n');

            //console.log(rows);
            rows.splice(0, 1);

            rows.forEach(row => {
              const cols = row.split(/,(?=\S)/);
              //console.log(cols);

              const cs = {
                country: cols[3],
                confirmed: +cols[7],
                deaths: +cols[8],
                recovered: +cols[9],
                active: +cols[10],
              };

              const temp: GlobalDataSummary = raw[cs.country];

              if (temp) {
                temp.active += cs.active;
                temp.confirmed += cs.confirmed;
                temp.deaths += cs.deaths;
                temp.recovered += cs.recovered;
                raw[cs.country] = temp;
              } else {
                raw[cs.country] = cs;
              }
              // data.push();

            });

            // console.log(data);
            return Object.values(raw) as GlobalDataSummary[];
          }
        )
        ,
        catchError
          (
            (error: HttpErrorResponse) => {
              if (error.status === 404) {
                this.now = this.subDays(this.now, 1);
                this.setDatesString();
                this.DataUrl = `${this.baseDataUrl}${this.getDate(this.month)}-${this.getDate(this.day)}-${this.year}${this.extention}`;
                return this.getGlobalData();
              }
            }
          )
      );
  }

  subDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
