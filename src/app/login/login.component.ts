import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authservice:AuthService, private routeservice:RouterService){}

securityCode:string=""

validateAdmin(){
  this.authservice.login(this.securityCode)
  if(this.authservice.isLoggedStatus==true){
this.routeservice.navigateToCakeRequestView();
}
}


}
