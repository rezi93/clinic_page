import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iface } from '../interface/iface';
import { ServService } from '../service/serv.service';
import {InputTextModule} from 'primeng/inputtext';
import {MenuItem} from 'primeng/api';
import {TabViewModule} from 'primeng/tabview';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  value: number = 5;
  doct: Iface[] = [];

  constructor(private _service: ServService,
    private _route: Router){}

  ngOnInit() {
    this.getlist();
    
  

  }
  counter = 6;

  loadMore() {
    this.counter += 4;
  }

  

  getlist(){
    this. _service.getdoctList().subscribe((result:Iface[])=>{
      this.doct=result
    })
  }

  bookingPage(docID:number){
    this._route.navigate(['/doctor/',docID])
    
    
     }

}
