import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { DataFetchService } from 'src/app/services/data-fetch.service';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-my-quotes-table',
  templateUrl: './my-quotes-table.component.html',
  styleUrls: ['./my-quotes-table.component.scss']
})
export class MyQuotesTableComponent implements OnInit {

  myQuotes = {
    //shows table column if set to true
    tableColConfig: [
      { show: true, headerLabel: 'Type', headerId: 'typeId' },
      { show: true, headerLabel: 'Policy No', headerId: 'policyNo' },
      { show: true, headerLabel: 'Product', headerId: 'productId' },
      { show: true, headerLabel: 'Status', headerId: 'status' },
      { show: true, headerLabel: 'Insured Name', headerId: 'insuredName' },
      { show: true, headerLabel: 'Brokerage', headerId: 'brokerage' },
      { show: true, headerLabel: 'Policy Period', headerId: 'policyPeriod' },
      { show: true, headerLabel: 'Transaction Effective Date', headerId: 'transactionEffectiveDate' },
      { show: true, headerLabel: 'Premium', headerId: 'premium' },
      { show: true, headerLabel: 'Last Updated', headerId: 'lastUpdated' },
      { show: true, headerLabel: 'Action', headerId: 'action' }
    ],
    quoteList: []
  }

  numberOfQuotes = 0;
  headerContent: headerContent = {
    subtitle: '',
    title: 'You have ' + this.numberOfQuotes + ' quotes',
    actionLabel: 'New Quote',
    actionLink: '/search',
    actionIcon: 'add'
  }
  constructor(private datafetchService: DataFetchService) { }

  ngOnInit(): void {
    this.getQuotesData();
  }

  getQuotesData(): void {
    this.datafetchService.getData()
      .subscribe(data => {
        this.myQuotes.quoteList = data;
        this.numberOfQuotes = this.myQuotes.quoteList.length;
        this.headerContent.title = 'You have ' + this.numberOfQuotes + ' quotes';
      });

  }

}
