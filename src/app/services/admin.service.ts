import { Injectable} from '@angular/core';
import { Allowance } from '../models/allowance.model';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { catchError, Observable,map } from 'rxjs';
import { AddEmployee } from '../models/add-employee.model';
import { UserViewModel } from '../models/user.model';
import { AddAdmin } from '../models/add-admin.model';
import { ClassViewModel } from '../models/add-class.model';
import { AddSalary } from '../models/add-salary.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient, private processHTTPMsgService:ProcessHTTPMsgService) { }

  async AddAllowanceUser(allowance: Allowance):Promise<Observable<Allowance>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Allowance>(baseURL + 'AdminController/AddClass',allowance, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }


  async AddEmployee(addEmployee: AddEmployee):Promise<Observable<AddEmployee>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<AddEmployee>(baseURL + 'AdminController/CreateEmployee',addEmployee, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
 

  async AddAdmin(addAdmin: AddAdmin):Promise<Observable<AddAdmin>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<AddAdmin>(baseURL + '',addAdmin, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  async GetEmployee():Promise<Observable<UserViewModel[]>>{
    return this.http.get<UserViewModel[]>(baseURL + "AdminController/GetAllEmployees")
    .pipe(map(users => users))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  async GetAdmin():Promise<Observable<AddAdmin>>{
    return this.http.get<AddAdmin>(baseURL + "")
    .pipe(map(users => users))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  async GetClass():Promise<Observable<ClassViewModel>>{
    return this.http.get<ClassViewModel>(baseURL + "")
    .pipe(map(users => users))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  async GetSalary():Promise<Observable<UserViewModel>>{
    return this.http.get<UserViewModel>(baseURL + "")
    .pipe(map(users => users))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
