import { Injectable} from '@angular/core';
import { Allowance } from '../models/allowance.model';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { catchError, Observable,map } from 'rxjs';
import { AddEmployee } from '../models/add-employee.model';


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
 
}
