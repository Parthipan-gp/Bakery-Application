import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

isLoggedStatus=false;

login(securitycode:string){
  if(securitycode=="GP@2022" ){
    this.isLoggedStatus=true
 }
}

logout(){
this.isLoggedStatus=false;
}

}
