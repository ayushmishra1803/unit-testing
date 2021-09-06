import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authenciated(){
    localStorage.setItem('user',"Ayush")
  }
  getsalarySlip(){
    if(localStorage.getItem('user') === "Ayush"){
      return "Salary Slip"
    }
    return "Not Auth"
  }
}
