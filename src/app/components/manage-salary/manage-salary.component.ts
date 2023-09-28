import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryViewModel } from 'src/app/models/SalaryViewModel';
import { UserViewModel } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent  implements OnInit {

  salary!: SalaryViewModel ;
  employees!:UserViewModel[];

  constructor(private router:Router,private adminService: AdminService) { }

 async ngOnInit(): Promise<void> {
  if (localStorage.length == 0) {
    this.router.navigate(['/login']);
  }
  this.GetAllEmployees();
  // this.adminService.GetSalary();
 }
 async GetAllEmployees(){
  const data = await (await this.adminService.GetEmployee()).toPromise();

  if (data) {

    this.employees = data;

    console.log(this.employees);

  } else {

    this.employees = [];

  }
 }
 async GenerateSalary(id:string){
  const data = await (await this.adminService.GenerateSalary(id)).toPromise();

  if (data) {

    this.salary = data;

    console.log(this.salary);

  } else {

    this.salary;

  }
 }
 async myFunction() {
  var x = document.getElementById("snackbar");
  if(x){
    x.className = "show";
    setTimeout(() => {
      if (x) {
        x.className = x.className.replace("show", "");
      }
    }, 3000);
  }
}
}
