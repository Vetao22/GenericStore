import { OrderProduct } from "./OrderProduct";

export class Order
{
  Id: number;
  UserId: number;
  Products: Array<OrderProduct>;
  OrderDate: Date;
  TotalValue: number;

  constructor(orderId: number, userId: number)
  {
    this.Id = orderId;
    this.UserId = userId;
    this.OrderDate = new Date();

    this.Products = new Array<OrderProduct>();
  }

  AddProduct(productId: number, amount: number)
  {
    let prod: OrderProduct;

    for(let x = 0; x < this.Products.length; x++)
    {
      if(this.Products[x].ProductId == productId)
      {
        prod = this.Products[x];
        break;
      }
    }

    if(prod == null)
    {
      prod = new OrderProduct(productId, amount);
      this.Products.push(prod);
    }
    else
    {
      prod.AddAmount(amount);
    }

    this.CalculateTotalValue();
  }

  SubProductAmount(productId: number, amountToSub: number):void
  {
    let prod: OrderProduct;

    for(let x = 0; x < this.Products.length; x++)
    {
      if(this.Products[x].ProductId == productId)
      {
        prod = this.Products[x];
        break;
      }
    }

    if(prod != null)
    {
      prod.SubAmount(amountToSub);

      if(prod.Amount <= 0)
      {
        this.RemoveProduct(productId);
      }
    }

    this.CalculateTotalValue();
  }

  RemoveProduct(productId: number): void
  {
    let prod: OrderProduct;

    for(let x = 0; x < this.Products.length; x++)
    {
      if(this.Products[x].ProductId == productId)
      {
        prod = this.Products[x];
        this.Products.splice(x, 1);

        break;
      }
    }

    this.CalculateTotalValue();
  }

  CalculateTotalValue(): void
  {
    let newValue = 0;

    for(let x = 0; x < this.Products.length; x++)
    {
      this.Products[x].CalculateTotalValue();

      newValue += this.Products[x].TotalValue;
    }

    this.TotalValue = newValue;
  }
}
