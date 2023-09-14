import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
    if (localStorage.length == 0) {
      this.router.navigate(['/login']);
    }
  }


}
