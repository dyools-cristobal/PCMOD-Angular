import { Component, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-renewals-listing',
  templateUrl: './renewals-listing.component.html',
  styleUrls: ['./renewals-listing.component.scss']
})
export class RenewalsListingComponent implements OnInit {

  headerContent: headerContent = {
    subtitle: '',
    title: 'Renewals',
    actionLabel: '',
    actionLink: '', // leave blank for no action
    actionIcon: ''
  }
  myQuotes =
    {
      //shows table column if set to true
      tableColConfig: {
        type: { show: true, headerLabel: 'Type' },
        quoteRefNo: { show: true, headerLabel: 'Quote Ref. No' },
        status: { show: true, headerLabel: 'Status' },
        insuredName: { show: true, headerLabel: 'Insured Name' },
        brokerage: { show: true, headerLabel: 'Brokerage' },
        product: { show: true, headerLabel: 'Product' },
        policyPeriod: { show: true, headerLabel: 'Policy Period' },
        transactionEffectiveDate: { show: true, headerLabel: 'Transaction Effective Date' },
        premium: { show: true, headerLabel: 'Premium' },
        lastUpdated: { show: true, headerLabel: 'Last Updated' },
        action: { show: true, headerLabel: 'Action' }
      },
      quoteList: [
        {
          typeId: 1,
          quoteRefNo: 'QR0123456789',
          status: 'new',
          insuredName: 'Sodales ac',
          brokerage: 'Chubb Broker',
          productId: 'Flexiguard',
          policyPeriod: '10-Oct-21 - 09-Oct-22',
          transactionEffectiveDate: '10-Oct-21',
          premium: '500000',
          currency: 'SGD',
          lastUpdated: '10-Oct-21'
        },
        {
          typeId: 1,
          quoteRefNo: 'QR0123456789',
          status: 'new',
          insuredName: 'Sodales ac',
          brokerage: 'Chubb Broker',
          productId: 'Flexiguard',
          policyPeriod: '10-Oct-21 - 09-Oct-22',
          transactionEffectiveDate: '10-Oct-21',
          premium: '500000',
          currency: 'SGD',
          lastUpdated: '10-Oct-21'
        },
        {
          typeId: 1,
          quoteRefNo: 'QR0123456789',
          status: 'new',
          insuredName: 'Sodales ac',
          brokerage: 'Chubb Broker',
          productId: 'Flexiguard',
          policyPeriod: '10-Oct-21 - 09-Oct-22',
          transactionEffectiveDate: '10-Oct-21',
          premium: '500000',
          currency: 'SGD',
          lastUpdated: '10-Oct-21'
        },
        {
          typeId: 1,
          quoteRefNo: 'QR0123456789',
          status: 'new',
          insuredName: 'Sodales ac',
          brokerage: 'Chubb Broker',
          productId: 'Flexiguard',
          policyPeriod: '10-Oct-21 - 09-Oct-22',
          transactionEffectiveDate: '10-Oct-21',
          premium: '500000',
          currency: 'SGD',
          lastUpdated: '10-Oct-21'
        },
        {
          typeId: 1,
          quoteRefNo: 'QR0123456789',
          status: 'new',
          insuredName: 'Sodales ac',
          brokerage: 'Chubb Broker',
          productId: 'Flexiguard',
          policyPeriod: '10-Oct-21 - 09-Oct-22',
          transactionEffectiveDate: '10-Oct-21',
          premium: '500000',
          currency: 'SGD',
          lastUpdated: '10-Oct-21'
        },
        {
          typeId: 1,
          quoteRefNo: 'QR0123456789',
          status: 'new',
          insuredName: 'Sodales ac',
          brokerage: 'Chubb Broker',
          productId: 'Flexiguard',
          policyPeriod: '10-Oct-21 - 09-Oct-22',
          transactionEffectiveDate: '10-Oct-21',
          premium: '500000',
          currency: 'SGD',
          lastUpdated: '10-Oct-21'
        },
      ]
    }
  constructor() { }

  ngOnInit(): void {
  }

}
