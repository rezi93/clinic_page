import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../service/serv.service';
import { Iface,IMenuItem } from '../interface/iface';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   docts:Iface[]=[]
  category:any=[]
  first_name: any;

  constructor(private _service: ServService,
    private _route: Router,private dialog:MatDialog){}

    ngOnInit(): void {}

    
  showLoginPopup(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The login popup was closed');
    });
  }



  getResult(){
    this._service.searchuser(this.first_name, this.category).subscribe(
      (result: Iface[]) => this.docts = result,
      
      (error) => console.error(error)
    );
    
  }
  regPage(){
    this._route.navigate(['/register']);
    
    
     }

}
