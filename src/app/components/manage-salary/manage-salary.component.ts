import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent  implements OnInit {

  salaries: UserViewModel[] = [];

  constructor(private router:Router,private adminService: AdminService) { }

 ngOnInit(): void {
  if (localStorage.length == 0) {
    this.router.navigate(['/login']);
  }

  this.adminService.GetSalary();
 }
 
}
