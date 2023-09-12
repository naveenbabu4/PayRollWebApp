import { Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Allowance } from '../models/allowance.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  allowanceLoginForm!:FormGroup;
  allowance!:Allowance;
  errMessage!:string;
  constructor(private fb:FormBuilder,private adminService:AdminService ) { }

  ngOnInit(): void {
    
  }

  createForm(){
    this.allowanceLoginForm = this.fb.group({
      Email : "",
      TypeId :"",
      ClassName:"",
      BasicSalary:"",
      HRAllowance:"",
      DAAllowance:"",
      TravelAllowance:"",
      MedicalAllowance:"",
      WashingAllowance:"",
      LeaveDeduction:""
    });
  }
  async AddAllowance(){
    this.allowance = this.allowanceLoginForm.value;
    console.log(this.allowance);
    (await this.adminService.AddAllowanceUser(this.allowance))
    .subscribe(
      login => {this.allowance = login,console.log(login)} ,
      errMess => { this.allowance = <any> null;this.errMessage = <any>errMess;}
    )
    this.allowanceLoginForm.reset();
  }

}
