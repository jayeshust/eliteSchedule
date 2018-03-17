//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { resolveDep } from '@angular/core/src/view/provider';



@Injectable()
export class EliteApiProvider {
public baseUrl = 'https://elite-schedule-app-9a6b4.firebaseio.com';

  constructor(public http: Http) {
   // console.log('Hello EliteApiProvider Provider');
  


   }

   getData(){
   return new Promise(resolve => {
    this.http.get(this.baseUrl+'/pets.json').subscribe(res => resolve(res.json()));
   });
}
}

