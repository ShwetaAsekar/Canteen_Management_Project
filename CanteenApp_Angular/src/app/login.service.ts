import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private httpclient: HttpClient) { 
    
  }
  LoginUser(login:Login):Observable<any>{
    return this.httpclient.post<any>("http://localhost:8080/login/logindata",login);
  }
}
