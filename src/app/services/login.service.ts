import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable,map } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,
    private processHTTPMsgService : ProcessHTTPMsgService) {

     }
     sendLoginUser(message: message): Observable<message> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<message>(baseURL + 'LoginUser',message, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
}
