import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable,map } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Login } from '../models/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,
    private processHTTPMsgService : ProcessHTTPMsgService) {

     }
     async sendLoginUser(login: Login): Promise<Observable<Login>> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<Login>(baseURL + 'LoginController/LoginUser',login, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
}
