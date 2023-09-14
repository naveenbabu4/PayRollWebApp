import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddSalary } from 'src/app/models/add-salary.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-all-salaries',
  templateUrl: './all-salaries.component.html',
  styleUrls: ['./all-salaries.component.css']
})
export class AllSalariesComponent {

  
  salarydetails:AddSalary [] = [];

  constructor(private router:Router, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    if (localStorage.length == 0) {
      this.router.navigate(['/login']);
    }
    this.employeeService.GetSalaryDetails();

  }

}
