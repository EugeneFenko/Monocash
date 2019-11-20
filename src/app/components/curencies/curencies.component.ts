import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Currency } from './currency';


@Component({
  selector: 'app-curencies',
  templateUrl: './curencies.component.html',
  styleUrls: ['./curencies.component.scss'],
  providers: [HttpService]
})

export class CurenciesComponent implements OnInit {
  constructor(private httpService: HttpService) { }
  currency: Currency[] = [];
  inputValue = 1;

  ngOnInit() {
    this.httpService.getData().subscribe((data: Currency[]) => {
      data.forEach(item => {
        // tslint:disable-next-line: triple-equals
        if (item.currencyCodeA == 840) {
          item.currencyCodeA = 'USD';
          item.currencyCodeB = 'UAH';
          this.currency.push(item);
        // tslint:disable-next-line: triple-equals
        } else if (item.currencyCodeA == 978 && item.currencyCodeB != 840) {
          item.currencyCodeA = 'EUR';
          item.currencyCodeB = 'UAH';
          this.currency.push(item);
        }
      });
    });
  }
}
