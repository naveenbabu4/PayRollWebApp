import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  constructor(
    private router: Router
  ) {}

  
addEmployee() {
  this.router.navigate(['/admin-dashboard/add-employee']);
}
updateEmployee(){
  this.router.navigate(['/admin-dashboard/update-employee'])
}
addClass(){
  this.router.navigate(['/admin-dashboard/add-class'])
}
}
