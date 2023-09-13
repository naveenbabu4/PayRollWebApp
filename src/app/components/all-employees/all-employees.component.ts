import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  employees: UserViewModel[] = [];

  constructor(private router: Router, private adminService: AdminService) { }
  ngOnInit(): void {

    this.adminService.GetEmployee();

  }



  addEmployee() {
    this.router.navigate(['/admin-dashboard/add-employee']);
  }
  updateEmployee() {
    this.router.navigate(['/admin-dashboard/update-employee'])
  }
  addClass() {
    this.router.navigate(['/admin-dashboard/add-class'])
  }
}
