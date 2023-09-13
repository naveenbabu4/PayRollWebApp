import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddAdmin } from 'src/app/models/add-admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.css']
})
export class AllAdminsComponent implements OnInit{

  admins:AddAdmin [] = [];

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {

    this.adminService.GetAdmin();

  }

  addAdmin() {
    this.router.navigate(['/admin-dashboard/add-admin']);
  }
  updateAdmin(){
    this.router.navigate(['/admin-dashboard/update-admin'])
  }
}
