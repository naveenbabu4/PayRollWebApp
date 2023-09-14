import { Component, OnInit } from '@angular/core';
import { AddAdmin } from 'src/app/models/add-admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  id !: string | null
  admin !: AddAdmin
  errMess!: string

  constructor(private adminService: AdminService) {

  }
  async ngOnInit(): Promise<void> {

    this.id = localStorage.getItem('id');

    console.log(this.id);

    if (this.id) {

      (await this.adminService.GetAdminById(this.id)).subscribe(

        (result: AddAdmin) => {

          this.admin = result;

          console.log(this.admin);

        },

        (errMess: string) => {

          this.admin;

          this.errMess = errMess;

        }

      );

    } else {

      this.id = null;

    }

  }
}
