import { Component, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  numberOfTasks = 5;
  headerContent: headerContent = {
    subtitle: 'Hi Julz, Welcome to P&C Modular Platform',
    title: 'You have ' + this.numberOfTasks + ' tasks due today',
    actionLabel: '',
    actionLink: '', // leave blank for no action
    actionIcon: ''
  }
  recentlyAccessed =
    [
      {
        insuredName: "Company ABCD",
        referenceNumber: "QR0123456789",
        productType: "Regional Flexiguard"
      },
      {
        insuredName: "Company XYZ",
        referenceNumber: "QR0987654321",
        productType: "Singapore Premiere Tech"
      },
      {
        insuredName: "Company ABCD",
        referenceNumber: "FG9922338842",
        productType: "Regional Premiere Tech"
      },
      {
        insuredName: "Marionette",
        referenceNumber: "FG9922338842",
        productType: "Regional Premiere Tech"
      },
      {
        insuredName: "Marionette",
        referenceNumber: "FG9922338842",
        productType: "Regional Premiere Tech"
      },
      {
        insuredName: "Marionette",
        referenceNumber: "FG9922338842",
        productType: "Regional Premiere Tech"
      },
      {
        insuredName: "Marionette",
        referenceNumber: "FG9922338842",
        productType: "Regional Premiere Tech"
      },
    ];
  tasks = [
    {
      dueDate: '12-31-2023',
      type: 'New Business',
      status: 'in-progress',
      refNo: '28736192312',
      assignedTo: 'Me'
    },
    {
      dueDate: '12-31-2023',
      type: 'New Business',
      status: 'under-review',
      refNo: '28736192312',
      assignedTo: 'Kayleigh Tan'
    }
    ,
    {
      dueDate: '12-31-2023',
      type: 'New Business',
      status: 'reviewing',
      refNo: '28736192312',
      assignedTo: 'Kayleigh Tan'
    }
    ,
    {
      dueDate: '12-31-2023',
      type: 'New Business',
      status: 'referral-pending-info',
      refNo: '28736192312',
      assignedTo: 'Kayleigh Tan'
    },
    {
      dueDate: '12-31-2023',
      type: 'New Business',
      status: 'new',
      refNo: '28736192312',
      assignedTo: 'Kayleigh Tan'
    }
  ]
  constructor() { }


  ngOnInit(): void {
  }

}
