import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class NameServiceService {


  constructor(private http:HttpClient) {}
   

   endPoint:string = 'https://api.nationalize.io/?name';

   getDataFromCount(name: string):Observable<Country>
   {
     let actualEndPoint=this.endPoint+'='+name;
     console.log('inside service:-'+actualEndPoint);
    return this.http.get<Country>(`${actualEndPoint}`);
   }
}