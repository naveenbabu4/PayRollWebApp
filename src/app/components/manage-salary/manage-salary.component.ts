import { Component,OnInit } from '@angular/core';
import { UserViewModel } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent  implements OnInit {

  salaries: UserViewModel[] = [];

  constructor(private adminService: AdminService) { }

 ngOnInit(): void {

  this.adminService.GetSalary();
 }
 
}
