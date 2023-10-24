import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private routerservice:Router) { }

  navigateToHomeView(){
    this.routerservice.navigate([""])
  }


  navigateToCakeRequestView(){
    this.routerservice.navigate(['cake'])
  }

  navigateToLoginView(){
    this.routerservice.navigate(['login'])
  }
}
