import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: string[] = [];
  productName: string=""

  constructor() { }

  ngOnInit(): void {
    this.getproducts();
  }
  getproducts() {
    return this.getproducts
  }
  addproducts(productName: string){
    this.products.push(productName);
   
  } 
  deleteproduct(productName: string){
    this.products=this.products.filter(c => c !== productName);
    
}


}
