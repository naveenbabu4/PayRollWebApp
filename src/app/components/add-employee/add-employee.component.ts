import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddEmployee } from 'src/app/models/add-employee.model';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm!: FormGroup;
  addEmployee!: AddEmployee;
  errMessage!: string;
  
  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addEmployeeForm = this.fb.group({
      FirstName: "",
      LastName: "",
      Email: "",
      Address: "",
      Password: "",
      PhoneNumber: "",
      JoiningDate: "",
      Position: ""
    });
  }
  async AddEmployee() {
    this.addEmployee = this.addEmployeeForm.value;
    console.log(this.addEmployee);
    (await this.adminService.AddEmployee(this.addEmployee))
      .subscribe(
        addEmployee => { this.addEmployee = addEmployee, console.log(addEmployee) },
        errMessage => { this.addEmployee = <any>null; this.errMessage = <any>errMessage; }
      )
    this.addEmployeeForm.reset();
  }

  goToManageEmployees() {
    this.router.navigate(['/admin-dashboard/all-employees']);
  }
}
