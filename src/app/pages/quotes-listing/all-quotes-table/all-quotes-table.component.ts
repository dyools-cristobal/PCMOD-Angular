import { Component, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-all-quotes-table',
  templateUrl: './all-quotes-table.component.html',
  styleUrls: ['./all-quotes-table.component.scss']
})
export class AllQuotesTableComponent implements OnInit {

  allQuotes = {
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
    quoteList: [
      {
        typeId: 'New',
        quoteRefNo: 'QR0123456789',
        policyNo: 'P0123456789',
        status: 'new',
        insuredName: 'Sodales ac',
        brokerage: 'Chubb Broker',
        productId: 'Flexiguard',
        producer: 'Chubb Broker',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        premium: '1500000',
        currency: 'SGD',
        lastUpdated: '10-Oct-21',
        actions: []
      },
      {
        typeId: 'New',
        quoteRefNo: 'QR0123456789',
        policyNo: 'P0123456789',
        status: 'in-progress',
        insuredName: 'Sodales ac',
        brokerage: 'Chubb Broker',
        productId: 'Flexiguard',
        producer: 'Chubb Broker',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        premium: '1500000',
        currency: 'SGD',
        lastUpdated: '10-Oct-21',
        actions: []
      },
      {
        typeId: 'New',
        quoteRefNo: 'QR0123456789',
        policyNo: 'P0123456789',
        status: 'in-progress',
        insuredName: 'Sodales ac',
        brokerage: 'Chubb Broker',
        productId: 'Flexiguard',
        producer: 'Chubb Broker',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        premium: '1500000',
        currency: 'SGD',
        lastUpdated: '10-Oct-21',
        actions: []
      },
      {
        typeId: 'New',
        quoteRefNo: 'QR0123456789',
        policyNo: 'P0123456789',
        status: 'unsuccessful',
        insuredName: 'Sodales ac',
        brokerage: 'Chubb Broker',
        productId: 'Flexiguard',
        producer: 'Chubb Broker',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        premium: '1500000',
        currency: 'SGD',
        lastUpdated: '10-Oct-21',
        actions: []
      },
      {
        typeId: 'New',
        quoteRefNo: 'QR0123456789',
        policyNo: 'P0123456789',
        status: 'under-review',
        insuredName: 'Sodales ac',
        brokerage: 'Chubb Broker',
        productId: 'Flexiguard',
        producer: 'Chubb Broker',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        premium: '1500000',
        currency: 'SGD',
        lastUpdated: '10-Oct-21',
        actions: []
      },
      {
        typeId: 'New',
        quoteRefNo: 'QR0123456789',
        policyNo: 'P0123456789',
        status: 'referral-pending-info',
        insuredName: 'Sodales ac',
        brokerage: 'Chubb Broker',
        productId: 'Flexiguard',
        producer: 'Chubb Broker',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        premium: '1500000',
        currency: 'SGD',
        lastUpdated: '10-Oct-21',
        actions: []
      },
    ]
  }
  numberOfQuotes = this.allQuotes.quoteList.length;
  headerContent: headerContent = {
    subtitle: '',
    title: 'You have ' + this.numberOfQuotes + ' quotes',
    actionLabel: 'New Quote',
    actionLink: '/dashboard', // leave blank for no action
    actionIcon: 'add'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
