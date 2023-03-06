import { Component, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';
import { DataFetchService } from 'src/app/services/data-fetch.service';

@Component({
  selector: 'app-policies-listing',
  templateUrl: './policies-listing.component.html',
  styleUrls: ['./policies-listing.component.scss']
})
export class PoliciesListingComponent implements OnInit {
  myQuotes = {
    //shows table column if set to true
    tableColConfig: [
      { show: true, headerLabel: 'Type', headerId: 'typeId' },
      { show: true, headerLabel: 'Policy No', headerId: 'policyNo' },
      { show: true, headerLabel: 'Status', headerId: 'status' },
      { show: true, headerLabel: 'Insured Name', headerId: 'insuredName' },
      { show: true, headerLabel: 'Brokerage', headerId: 'brokerage' },
      { show: true, headerLabel: 'Product', headerId: 'productId' },
      { show: true, headerLabel: 'Policy Period', headerId: 'policyPeriod' },
      { show: true, headerLabel: 'Transaction Effective Date', headerId: 'transactionEffectiveDate' },
      { show: true, headerLabel: 'Premium', headerId: 'premium' },
      { show: true, headerLabel: 'Last Updated', headerId: 'lastUpdated' },
      { show: true, headerLabel: 'Action', headerId: 'action' }
    ],
    quoteList: []
  }
  headerContent: headerContent = {
    subtitle: '',
    title: 'Policies',
    actionLabel: '',
    actionLink: '', // leave blank for no action // leave blank for no action
    actionIcon: ''
  }
  constructor(private datafetchService: DataFetchService) { }

  ngOnInit(): void {
    this.getQuotesData();
  }

  getQuotesData(): void {
    this.datafetchService.getPoliciesData()
      .subscribe(data => this.myQuotes.quoteList = data

      );
  }

}
