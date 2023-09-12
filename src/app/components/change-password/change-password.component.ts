import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangePassword } from 'src/app/models/change-password.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  changePassword!:ChangePassword;
  errMess!:string;
  constructor(private loginService:LoginService,private fb:FormBuilder){
      this.CreateForm();
  }
  ngOnInit(): void {
    
  }
  CreateForm(){
    this.changePasswordForm = this.fb.group({
      Id : "548edf9a-f32b-4af2-8547-50bd74762612",
      OldPassword : "",
      NewPassword : ""
    });
  }
  async ChangePassword(){
    this.changePassword = this.changePasswordForm.value;
    console.log(this.changePassword);
    (await this.loginService.changePassword(this.changePassword))
      .subscribe(
        changePassword => {this.changePassword = changePassword,console.log(changePassword)} ,
        errMess => { this.changePassword = <any> null;this.errMess = <any>errMess;}
      )
  }
}
