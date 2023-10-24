import { Component, Input } from '@angular/core';
import { Productdata } from '../model/productdetails';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() 
  
  cake:Productdata={}

}
