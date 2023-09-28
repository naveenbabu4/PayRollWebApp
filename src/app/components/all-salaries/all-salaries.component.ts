import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddSalary } from 'src/app/models/add-salary.model';
import { SalaryViewModel } from 'src/app/models/SalaryViewModel';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-all-salaries',
  templateUrl: './all-salaries.component.html',
  styleUrls: ['./all-salaries.component.css']
})
export class AllSalariesComponent {

  
  salarydetail!:SalaryViewModel;
  id !: string | null;
  constructor(private router:Router, private employeeService: EmployeeService) {}

  async ngOnInit(): Promise<void> {
    if (localStorage.length == 0) {
      this.router.navigate(['/login']);
    }
    this.id = localStorage.getItem('id');
    const data = await (await this.employeeService.GenerateSalary(this.id)).toPromise();

  if (data) {

    this.salarydetail = data;

    console.log(this.salarydetail);

  } else {

    this.salarydetail;

  }

  }

}
