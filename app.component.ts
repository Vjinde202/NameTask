import { Component } from '@angular/core';
import { NameServiceService } from './name-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameservice:NameServiceService;
  allInfo:any;
  constructor(nameservice:NameServiceService){
    this.nameservice=nameservice;

  }
  doAction(name:string){
    this.nameservice.getDataFromCount(name).subscribe(
      data=>{
        this.allInfo=(data);
        console.log(this.allInfo);
      },
      err=>{
        console.log(err)
      }
    );
  }

}