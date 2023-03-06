import { Component } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Modular-UI';
  menuList = [
    {
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      label: 'Quotes',
      route: '/quotesListing'
    },
    {
      label: 'Referrals',
      route: '/referralsListing'
    },
    {
      label: 'Policies',
      route: '/policiesListing'
    },
    {
      label: 'Renewals',
      route: '/renewalsListing'
    },
    {
      label: 'Notifications',
      route: '/notifications'
    },
    {
      label: 'Search',
      route: '/search'
    },
  ]
}
