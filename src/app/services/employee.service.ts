import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable,map } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { UserViewModel } from '../models/user.model';
import { ApplyLeave } from '../models/apply-leave.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient,private processHTTPMsgService : ProcessHTTPMsgService) { }

  async ApplyLeave(applyLeave: ApplyLeave):Promise<Observable<ApplyLeave>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<ApplyLeave>(baseURL + 'EmployeeController/ApplyLeave',applyLeave, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  async GetEmployeeById(id : string):Promise<Observable<UserViewModel>>{
    return this.http.get<UserViewModel>(baseURL + "EmployeeController/GetEmployeeById")
    .pipe(map(users => users))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  
}