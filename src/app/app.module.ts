import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AllAdminsComponent } from './components/all-admins/all-admins.component';
import { AddAdminsComponent } from './components/add-admins/add-admins.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { UpdateLeaveComponent } from './components/update-leave/update-leave.component';
import { ManageSalaryComponent } from './components/manage-salary/manage-salary.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { CheckLeaveStatusComponent } from './components/check-leave-status/check-leave-status.component';
import { AllSalariesComponent } from './components/all-salaries/all-salaries.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminDetailsComponent,
    ChangePasswordComponent,
    AllEmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AllAdminsComponent,
    AddAdminsComponent,
    UpdateAdminComponent,
    UpdateLeaveComponent,
    ManageSalaryComponent,
    EmployeeDashboardComponent,
    EmployeeDetailsComponent,
    ApplyLeaveComponent,
    CheckLeaveStatusComponent,
    AllSalariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
