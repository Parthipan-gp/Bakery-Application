import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdata } from '../model/productdetails';
import { RouterService } from '../services/router.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(public authservice:AuthService,private routerservice:RouterService){}

logoutFromAdminData(){
  this.authservice.logout();
  
}
}
