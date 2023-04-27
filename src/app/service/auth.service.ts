import { Injectable } from '@angular/core';
import { Iface,Ilogin,Iuser } from '../interface/iface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map, tap, concatMap, Subject,BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NgProgressRef } from 'ngx-progressbar';
import{JwtHelperService} from'@auth0/angular-jwt'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
   jwtHelper = new JwtHelperService();
   currentUser: Ilogin = { 
    Email: '',
   Password:''
   
  };
  
  progressRef!: NgProgressRef;
  defaultColor: string = '#007bff';
  successColor: string = '#13b955';
  failureColor: string = '#fc3939';
  currentColor: string = this.defaultColor;
 

  constructor(private _http: HttpClient, private _route: ActivatedRoute,) { }

  

  login(credentials: any): Observable<any> {
    return this._http.post('https://localhost:44346/api/User/login/', credentials).pipe(
      map((response:any)=>{
        const decodetoken=this.jwtHelper.decodeToken(response.token);
        this.currentUser.Email=decodetoken.email;
        this.currentUser.Password=decodetoken.Password;
        return this.currentUser
      })
    )
  }

  getProtectedData() {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get('https://localhost:44346/api/User/token', { headers });
  }
  

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  getToken(): any {
    return localStorage.getItem('access_token');
  }

  setToken(token:string){
    localStorage.setItem('access_token',token);
  }

  // email confirm

  confirmEmail(model: any) {
    return this._http.post( 'https://localhost:44346/api/User/email', model);
  }

  startLoading() {
    this.currentColor = this.defaultColor;
    this.progressRef.start();
  }

  completeLoading() {
    this.progressRef.complete();
  }

  setSuccess() {
    this.currentColor = this.successColor;
  }

  setFailure() {
    this.currentColor = this.failureColor;
  }
  
  
  
}
