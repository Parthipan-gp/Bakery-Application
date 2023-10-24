import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Productdata } from '../model/productdetails';
import { OrderData } from '../model/order-discription';
import { OrderService } from '../services/order.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  cake:Productdata={}
  user:OrderData={}

  minDate: Date = new Date();

  makeRequestStatus:boolean=false

  constructor(private ar:ActivatedRoute,private sb: MatSnackBar,private prodservice:ProductService,private orderservice:OrderService,private routerservice:RouterService )
  {this.minDate.setDate(this.minDate.getDate() + 1);}

  ngOnInit(){
    this.ar.paramMap.subscribe((data)=>{
    let id=data.get('id')??0
    this.prodservice.getDataForId(+id).subscribe((data)=>{
      this.cake=data;
    })
    
    
    })
  }   

  calcTotalAmount(){
    let quantity=this.user.quantity
    if(this.cake.price!=undefined && quantity>=0){
      this.user.totalPrice=quantity*this.cake.price
    }
  }


sendData(){
  if(this.user.customerName && this.user.customerEmail && this.user.phoneNumber && this.user.address && this.user.dateOfOrder)
  {
    this.user.cakeName=this.cake.name;
    this.user.price=this.cake.price;
    this.orderservice.sendDataToServer(this.user).subscribe({
      next: data => {
        this.makeRequestStatus=true;
       this.routerservice.navigateToHomeView
        this.sb.open("Request Submitted Successfully", " success",{
          duration: 5000,
          panelClass:['mat-toolbar','mat-primary']
        });
    
          
         },
       error: error => {
          alert('Failed to Add Note Due to Server Error !!')
       }
     })

  }

}


canDeactivate(){
if(!this.makeRequestStatus){
this.makeRequestStatus=confirm("Do you really want to leave this page without saving changes")
return this.makeRequestStatus;
}
return true;

}



}
