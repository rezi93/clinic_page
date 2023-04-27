import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServService } from '../service/serv.service';
import { Iface,IMenuItem } from '../interface/iface';
import { Observable, map, tap, concatMap, Subject,BehaviorSubject } from 'rxjs';
import {TabViewModule} from 'primeng/tabview';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  doct: Iface[] = [];
  docdata:any
  docID:any
 
  counter = 4;
  constructor(private _serv: ServService,
    private _route: Router,private _act: ActivatedRoute,){}

  ngOnInit(): void {}

  
  loadMore() {
    this.counter += 4;
  }
  getlist(){
    this. _serv.getdoctList().subscribe((result:Iface[])=>{
      this.doct=result
    })
  }

  
}
