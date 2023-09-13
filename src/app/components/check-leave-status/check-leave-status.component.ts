import { Component } from '@angular/core';
import { ApplyLeave } from 'src/app/models/apply-leave.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-check-leave-status',
  templateUrl: './check-leave-status.component.html',
  styleUrls: ['./check-leave-status.component.css']
})
export class CheckLeaveStatusComponent {

  leaves: ApplyLeave[] = [];

  constructor(private employeeService: EmployeeService) { }

 ngOnInit(): void {

  this.employeeService.GetLeaves();
 }

}
