import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Currency } from '../curencies/currency';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [HttpService]
})

export class FooterComponent implements OnInit {
  constructor(private httpService: HttpService) { }
  currency: Currency[] = [];

  ngOnInit() {
    this.httpService.getData().subscribe((data: Currency[]) => {
      this.currency = data;
    });
  }

}
