import { Component, OnInit } from '@angular/core';
import { headerContent } from 'src/interfaces/header-content-interface';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications = [
    {
      sourceUW: 'Kayleigh Tan',
      statusPrev: 'in-progress',
      statusTo: 'under-review',
      quoteRefNo: 'QR0123456789',
      policyNo: 'P0123456789',
      read: false,
      dateRecieved: '10-Oct-21 10:23 am'
    },
    {
      sourceUW: 'Kayleigh Tan',
      statusPrev: 'under-review',
      statusTo: 'referral-declined',
      quoteRefNo: 'QR238873742',
      policyNo: 'P0238873742',
      read: true,
      dateRecieved: '10-Oct-21 10:23 am'
    },
    {
      sourceUW: 'Kayleigh Tan',
      statusPrev: 'under-review',
      statusTo: 'referral-declined',
      quoteRefNo: 'QR238873742',
      policyNo: 'P0238873742',
      read: true,
      dateRecieved: '10-Oct-21 10:23 am'
    },
    {
      sourceUW: 'Kayleigh Tan',
      statusPrev: 'under-review',
      statusTo: 'referral-declined',
      quoteRefNo: 'QR238873742',
      policyNo: 'P0238873742',
      read: true,
      dateRecieved: '10-Oct-21 10:23 am'
    },
    {
      sourceUW: 'Kayleigh Tan',
      statusPrev: 'under-review',
      statusTo: 'referral-declined',
      quoteRefNo: 'QR238873742',
      policyNo: 'P0238873742',
      read: true,
      dateRecieved: '10-Oct-21 10:23 am'
    }
  ]
  unread: number = 5; // inject real count
  headerContent: headerContent = {
    subtitle: '',
    title: 'Notifications (' + this.unread + ' unread)',
    actionLabel: '',
    actionLink: '',
    actionIcon: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  message(notification: any) {
    let message = '';
    switch (notification.statusTo) {
      case 'under-review':
        message = notification.sourceUW + ' moved referral for submission ' + notification.policyNo + ' to Under Review';
        break;
      case 'referral-declined':
        message = notification.sourceUW + ' declined referral for submission ' + notification.quoteRefNo;
        break;
    }

    return message
  }

  setReadUnread(index: any) {
    this.notifications[index].read = !this.notifications[index].read;
  }

  readUnreadText(read: boolean) {
    if (read === false) {
      return 'Unread'
    } else {
      return 'Read'
    }
  }
}
