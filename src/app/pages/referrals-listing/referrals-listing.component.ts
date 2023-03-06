import { Component, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-referrals-listing',
  templateUrl: './referrals-listing.component.html',
  styleUrls: ['./referrals-listing.component.scss']
})
export class ReferralsListingComponent implements OnInit {

  headerContent: headerContent = {
    subtitle: '',
    title: 'Referrals',
    actionLabel: '',
    actionLink: '', // leave blank for no action
    actionIcon: ''
  }
  referrals = {
    //shows table column if set to true
    tableColConfig: [
      { show: true, headerLabel: 'Type', headerId: 'typeId' },
      { show: true, headerLabel: 'Policy / Quote ref no.', headerId: 'policyNo' },
      { show: true, headerLabel: 'Referral Status', headerId: 'status' },
      { show: true, headerLabel: 'Insured Name / Producer', headerId: 'insuredName' },
      { show: true, headerLabel: 'Product', headerId: 'productId' },
      { show: true, headerLabel: 'Premium', headerId: 'premium' },
      { show: true, headerLabel: 'Policy Period', headerId: 'policyPeriod' },
      { show: true, headerLabel: 'Handling UW', headerId: 'handlingUW' },
      { show: true, headerLabel: 'Referral Reason', headerId: 'referralReason' },
      { show: true, headerLabel: 'Referral Due Date', headerId: 'referralDueDate' },
    ],
    quoteList: [
      {
        typeId: 'New',
        quoteRefNo: 'QR0123456789',
        policyNo: 'P0123456789',
        status: 'under-review',
        insuredName: 'Sodales ac',
        brokerage: 'Chubb Broker',
        productId: 'Flexiguard',
        producer: 'Chubb Broker',
        handlingUW: 'Julz',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        referralReason: 'Higher Coverage Limit',
        referralDueDate: '15-Oct-21',
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
        handlingUW: 'Julz',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        referralReason: 'Higher Coverage Limit',
        referralDueDate: '15-Oct-21',
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
        handlingUW: 'Julz',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        referralReason: 'Higher Coverage Limit',
        referralDueDate: '15-Oct-21',
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
        handlingUW: 'Julz',
        policyPeriod: '10-Oct-21 - 09-Oct-22',
        transactionEffectiveDate: '10-Oct-21',
        referralReason: 'Higher Coverage Limit',
        referralDueDate: '15-Oct-21',
        premium: '1500000',
        currency: 'SGD',
        lastUpdated: '10-Oct-21',
        actions: []
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
