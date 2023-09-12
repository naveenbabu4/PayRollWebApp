import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.css']
})
export class AllAdminsComponent {

  constructor(
    private router: Router
  ) {}

  addAdmin() {
    this.router.navigate(['/admin-dashboard/add-admin']);
  }
  updateAdmin(){
    this.router.navigate(['/admin-dashboard/update-admin'])
  }
}
