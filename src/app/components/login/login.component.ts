import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { UserViewModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    loginForm !: FormGroup;
    login!: Login;
    errMess!:string;
    user!: string;
    constructor(private fb:FormBuilder,private loginService:LoginService,
      private userService:UserService ){
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
        async login => {this.login = login,console.log(login),

        sessionStorage.setItem('id',JSON.stringify(login)),
        this.userService.setUser(sessionStorage['id'])} ,
        errMess => { this.login = <any> null;this.errMess = <any>errMess;}
      )
      
      this.loginForm.reset();
    }
}


