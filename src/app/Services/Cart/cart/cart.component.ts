import { Component, OnInit } from '@angular/core';
import { CartService } from '../../CartService';
import { ProductsService } from '../../ProductsService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit
{

  constructor(public cartService: CartService, public prodService: ProductsService) { }

  ngOnInit(): void
  {

  }

  RemoveFromCart(productId: number): void
  {
    if(productId)
    {
      this.cartService.RemoveProduct(productId);
    }
  }

  ValueChange(event)
  {
    this.cartService.TotalValue();
  }
}
