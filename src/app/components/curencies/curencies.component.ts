import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './currency';

@Component({
  selector: 'app-curencies',
  templateUrl: './curencies.component.html',
  styleUrls: ['./curencies.component.scss']
})

export class CurenciesComponent implements OnInit {
  constructor(private http: HttpClient) { }

  currency: Currency;
  inputValue = 1;
  valCoef = 25.7;

  ngOnInit() {
    this.http.get('http://localhost:3000/currency').subscribe((data: Currency) => {
      console.log(data);
      this.currency = data;
    });
  }

}
