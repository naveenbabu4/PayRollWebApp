import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router:Router, private loginService:LoginService,private fb:FormBuilder){
      this.CreateForm();
  }
  ngOnInit(): void {
    if (localStorage.length == 0) {
      this.router.navigate(['/login']);
    }

    this.changePasswordForm = this.fb.group({
      OldPassword: ['', Validators.required],
      NewPassword: ['', Validators.required],
    });

  }
  CreateForm(){
    this.changePasswordForm = this.fb.group({
      Id : localStorage.getItem('id'),
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
