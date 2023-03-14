import { ProductsService } from './../../services/products.service';
import { Iproduct } from './../iproduct';
// import { AllProducts } from './../AllProducts';
import { Component } from '@angular/core';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsList : Iproduct[] = [];
 constructor( private productsService:ProductsService){ }

 ngOnInit():void{
  this.productsList = this.productsService.getAllProducts()
 }

}
