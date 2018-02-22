import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ReportsComponent } from './sidenavcomponents/reports/reports.component';
import { RegistrationComponent } from './sidenavcomponents/registration/registration.component';
import { DailyWagesComponent } from './sidenavcomponents/daily-wages/daily-wages.component';
import { AccountsComponent } from './sidenavcomponents/accounts/accounts.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'reports',component:ReportsComponent },
            { path: 'registration',component:RegistrationComponent },
            { path: 'wages',component:DailyWagesComponent },
            { path: 'accounts',component:AccountsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
