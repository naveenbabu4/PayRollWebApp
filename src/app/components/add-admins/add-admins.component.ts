import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddAdmin } from 'src/app/models/add-admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.css']
})
export class AddAdminsComponent implements OnInit{

  addAdminForm!: FormGroup;
  addAdmin!: AddAdmin;
  errMessage!: string;
  
  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addAdminForm = this.fb.group({
      FirstName: "",
      LastName: "",
      Email: "",
      Address: "",
      Password: "",
      PhoneNumber: "",
      JoiningDate: "",
      Position: ""
    });
  }
  async AddAdmin() {
    this.addAdmin = this.addAdminForm.value;
    console.log(this.addAdmin);
    (await this.adminService.AddAdmin(this.addAdmin))
      .subscribe(
        addAdmin => { this.addAdmin = addAdmin, console.log(addAdmin),this.router.navigate(['admin-dashboard/all-admins']) },
        errMessage => { this.addAdmin = <any>null; this.errMessage = <any>errMessage; }
      )
    this.addAdminForm.reset();
  }

  goToManageAdmins() {
    this.router.navigate(['/admin-dashboard/all-admins']);
  }

}
