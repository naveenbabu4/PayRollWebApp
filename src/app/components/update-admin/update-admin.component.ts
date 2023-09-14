import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  constructor(private router:Router){

  }
  ngOnInit(): void {
    if (localStorage.length == 0) {
      this.router.navigate(['/login']);
    }
  }

}
