import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    loginForm !: FormGroup;
    login!: Login;
    errMess!:string;

    constructor(private fb:FormBuilder,private loginService:LoginService ){
      this.createForm();
    }
    ngOnInit() : void{

    }
    createForm(){
      this.loginForm = this.fb.group({
        Email : "",
        Password : ""
      });
    }
    async LoginUser(){
      this.login = this.loginForm.value;
      console.log(this.login);
      (await this.loginService.sendLoginUser(this.login))
      .subscribe(
        login => {this.login = login,console.log(login)} ,
        errMess => { this.login = <any> null;this.errMess = <any>errMess;}
      )
      this.loginForm.reset();
    }
}


