import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { UserViewModel } from 'src/app/models/user.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  id !: string | null
  user !: UserViewModel
  constructor(private employeeService : EmployeeService,
    private userService : UserService){

  }
  async ngOnInit(): Promise<void> {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    if (this.id) {
      const user = await (await this.employeeService.GetEmployeeById(this.id)).toPromise();
      console.log(this.user);
      if (user) {
        this.user = user;
      } else {
        this.user;
      }
    } else {
      this.id;
    }
  }
}
