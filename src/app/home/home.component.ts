import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdata } from '../model/productdetails';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cake:Productdata[]=[]

constructor(private prodservice:ProductService){}

ngOnInit(){
  this.prodservice.getData().subscribe({
    next: data => {
      this.cake = data
    },
    error: error => {
      alert('Failed to Fetch Notes Due to Server Error !!')
    }
  })
}

searchCake(searchText:string){
  if (searchText == "") {
    this.cake=this.cake
  }
  this.prodservice.getData().subscribe((cakes) => {
      this.cake = cakes.filter(cake =>
        cake.name?.toLowerCase().startsWith(searchText.toLowerCase()))
    })
  
}



searchInput:string=""

onfilter(){
 
  this.prodservice.getData().subscribe((cakes)=>{
    this.cake=cakes.filter(cake=>cake.category?.toLowerCase().startsWith(this.searchInput.toLowerCase()))
  })
}


}






