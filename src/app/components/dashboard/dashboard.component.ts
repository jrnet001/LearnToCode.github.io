import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input('totalConfirmed')
  totalConfirmed = 0;

  @Input('totalActive')
  totalActive = 0;

  @Input('totalDeaths')
  totalDeaths = 0;

  @Input('totalRecovered')
  totalRecovered = 0;


  constructor() { }

  ngOnInit() {
  }

}
