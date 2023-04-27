import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Ilogin } from '../interface/iface';
import{JwtHelperService} from'@auth0/angular-jwt'
import { HttpHeaders } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginform: FormGroup;
  loguser: Ilogin[] = [];
  isuservalid:boolean=false
  Email: any;
  Password: any;
  authService: any;
  private _http: any;

  constructor(private _router: Router, private serv: AuthService, private _fb: FormBuilder,private dialog:MatDialog) {
    this.loginform = this._fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  close():void{
    const dialogRef=this.dialog.closeAll()
  }
  
  onSubmit() {
    const credentials = { Email: this.Email, Password: this.Password };
    this.serv.login(credentials).subscribe(
      (response:any) => {
        const token = response.access_token;
        this.serv.setToken(token);
        this.serv. getProtectedData().subscribe(
          (response:any) => {
            console.log(response);
          },
          (error: any) => {
            console.log(error);
          }
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 
}

