import { Component, OnInit } from '@angular/core';
import { UserViewModel } from 'src/app/models/user.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  user = this.userService.user;
  constructor(private employeeService : EmployeeService,
    private userService : UserService){

  }
  ngOnInit(): void {
    console.log(this.user);
  }
}
