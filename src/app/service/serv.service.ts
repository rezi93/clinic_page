import { Injectable } from '@angular/core';
import { Iface,Iuser } from '../interface/iface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map, tap, concatMap, Subject,BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  Iface: any;
  docID!: any
  items: Iface[] = []
  doct: Iface[] = [];
  doctData: any
  item=new BehaviorSubject<any>([])

  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }


  getdoctList(): Observable<Iface[]> {
    return this._http.get<Iface[]>('https://localhost:44346/GetDocList').pipe(
      tap(result => result),
      map(data => data)
    )
  }

  searchuser(first_name: string, category: string): Observable<Iface[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = { first_name, category };
    return this._http.get<Iface[]>('https://localhost:44346/GetDocList',{headers,params} )
    
  }

  getuser(id: any): Observable<Iface[]> {

    return this._http.get<Iface[]>('https://localhost:44346/doctor/' + id + '/ ')
  }

  
}
