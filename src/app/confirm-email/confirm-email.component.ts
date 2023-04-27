import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  emailConfirmed: boolean = false;
  urlParams: any = {};
  constructor(private auth:AuthService, private route:ActivatedRoute){}

ngOnInit(): void{}


  confirmEmail() {
    this.auth.startLoading();
    this.auth.confirmEmail(this.urlParams).subscribe(
      () => {
        this.auth.setSuccess();
        console.log('success');
       
        this.auth.completeLoading();
        this.emailConfirmed = true;
      },
      (error) => {
        this.auth.setFailure();
        console.log(error);
        
        this.auth.completeLoading();
        this.emailConfirmed = false;
      }
    );
  }

}
