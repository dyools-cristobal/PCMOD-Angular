import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReferralsListingComponent } from './pages/referrals-listing/referrals-listing.component';
import { PoliciesListingComponent } from './pages/policies-listing/policies-listing.component';
import { RenewalsListingComponent } from './pages/renewals-listing/renewals-listing.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SearchComponent } from './pages/search/search.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MyQuotesTableComponent } from './pages/quotes-listing/my-quotes-table/my-quotes-table.component';
import { AllQuotesTableComponent } from './pages/quotes-listing/all-quotes-table/all-quotes-table.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFilterComponent } from './components/page-filter/page-filter.component';
import { ChubbTableComponent } from './components/chubb-table/chubb-table.component';
import { StatusChipComponent } from './components/status-chip/status-chip.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReferralsListingComponent,
    PoliciesListingComponent,
    RenewalsListingComponent,
    NotificationsComponent,
    SearchComponent,
    SideNavComponent,
    MyQuotesTableComponent,
    AllQuotesTableComponent,
    PageHeaderComponent,
    PageFilterComponent,
    ChubbTableComponent,
    StatusChipComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
