import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-leave',
  templateUrl: './update-leave.component.html',
  styleUrls: ['./update-leave.component.css']
})
export class UpdateLeaveComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
    if (localStorage.length == 0) {
      this.router.navigate(['/login']);
    }
  }

}
