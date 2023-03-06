import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PoliciesListingComponent } from './pages/policies-listing/policies-listing.component';
import { AllQuotesTableComponent } from './pages/quotes-listing/all-quotes-table/all-quotes-table.component';
import { MyQuotesTableComponent } from './pages/quotes-listing/my-quotes-table/my-quotes-table.component';
import { ReferralsListingComponent } from './pages/referrals-listing/referrals-listing.component';
import { RenewalsListingComponent } from './pages/renewals-listing/renewals-listing.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'referralsListing', component: ReferralsListingComponent },
  { path: 'policiesListing', component: PoliciesListingComponent },
  { path: 'renewalsListing', component: RenewalsListingComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'quotesListing/allQuotes', component: AllQuotesTableComponent },
  { path: 'quotesListing/myQuotes', component: MyQuotesTableComponent },
  { path: 'error', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
