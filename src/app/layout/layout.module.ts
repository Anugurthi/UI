import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './sidenavcomponents/registration/registration.component';
import { DailyWagesComponent } from './sidenavcomponents/daily-wages/daily-wages.component';
import { ReportsComponent } from './sidenavcomponents/reports/reports.component';
import { AccountsComponent } from './sidenavcomponents/accounts/accounts.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, RegistrationComponent, DailyWagesComponent, ReportsComponent, AccountsComponent]
})
export class LayoutModule {}
