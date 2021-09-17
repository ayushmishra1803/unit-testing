import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumService {
  custoumerRoutes=[
    {
      service:"E",name:"Ayush"
    },{
      service:"D",name:"Angular"
    },
    {
      service:"N",name:"React"
    }
  ]

  constructor() { }
  sum(a:number,b:number){
    return a+b
  }
  filteraccordingtoServiceTime(service:string){
    return this.custoumerRoutes.filter(data=>data.service === service)
  }
}
