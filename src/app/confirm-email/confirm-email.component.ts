import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  emailConfirmed: boolean = false;
  urlParams: string = '';
  constructor(private auth:AuthService, private route:ActivatedRoute,private _fb:FormBuilder){
    this.myEmail=this._fb.group({
      email:this._fb.control('', [Validators.required, Validators.email])
    })
  }

  myEmail!:FormGroup
  
ngOnInit(): void{}


confirmEmail() {
  const urlParams = this.myEmail.value.email;

  if (urlParams) {
    this.auth.confirmEmail(urlParams).subscribe(
      () => {
        console.log('ok');
        this.emailConfirmed = true;
      },
      (error) => {
        console.log(error);
        this.emailConfirmed = false;
      }
    );
  }
}

    

}
