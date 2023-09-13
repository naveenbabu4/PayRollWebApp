import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable,map } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { UserViewModel } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient,private processHTTPMsgService : ProcessHTTPMsgService) { }
  async GetEmployeeById(id : string):Promise<Observable<UserViewModel>>{
    return this.http.get<UserViewModel>(baseURL + "EmployeeController/GetEmployeeById")
    .pipe(map(users => users))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
