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
export class UserService {
  user !: any;
  constructor() { }
  async setUser(newUser : any){
    this.user = newUser;
  }
}
