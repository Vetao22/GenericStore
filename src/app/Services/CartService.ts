import { Inject, Injectable } from "@angular/core";
import { Order } from "../Models/Order";
import { ProductsService } from "./ProductsService";

@Injectable({ providedIn: 'root' })
export class CartService
{
  Order: Order;

  constructor()
  {
    this.Order = new Order(-1, -1);
  }

  AddProduct(productId: number, amount = 1)
  {
    this.Order.AddProduct(productId, amount);
  }

  SubProductAmount(productId: number, amount = 1)
  {
    this.Order.SubProductAmount(productId, amount);
  }

  RemoveProduct(productId: number)
  {
    this.Order.RemoveProduct(productId);
  }

  TotalValue(): number
  {
    this.Order.CalculateTotalValue();

    return this.Order.TotalValue;
  }
}
