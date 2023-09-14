import { Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Allowance } from '../models/allowance.model';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  allowanceLoginForm!:FormGroup;
  allowance!:Allowance;
  errMessage!:string;
  constructor(private fb:FormBuilder,private adminService:AdminService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.allowanceLoginForm = this.fb.group({
      ClassName:"",
      BasicSalary:"",
      TravelAllowance:"",
      MedicalAllowance:"",
      WashingAllowance:"",
    });
  }
  async AddAllowance(){
    this.allowance = this.allowanceLoginForm.value;
    console.log(this.allowance);
    debugger
    (await this.adminService.AddAllowanceUser(this.allowance))
    .subscribe(
      allowance => {this.allowance = allowance,console.log(allowance)} ,
      errMess => { this.allowance = <any> null;this.errMessage = <any>errMess;}
    )
    this.allowanceLoginForm.reset();
  }

  goToManageEmployees() {
    this.router.navigate(['/admin-dashboard/all-employees']);
  }
}
