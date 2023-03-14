import { Iproduct } from './../component/iproduct';
import { Injectable } from '@angular/core';
import { AllProducts } from './../component/AllProducts'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getAllProducts():Iproduct[]{
    return AllProducts ;
  }

  getProduct(i :number):Iproduct{

    return AllProducts.filter((product)=> product.id == i )[0];
  }
}
