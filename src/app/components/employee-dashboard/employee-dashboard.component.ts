import { Component } from '@angular/core';
import { ApplyLeave } from 'src/app/models/apply-leave.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {

  leaves: ApplyLeave[] = [];

  constructor(private employeeService: EmployeeService) { }

 ngOnInit(): void {

  this.employeeService.GetLeaves();
 }

}
