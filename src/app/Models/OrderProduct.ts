import { Injector } from "@angular/core";
import { ProductsService } from "../Services/ProductsService";

export class OrderProduct
{
  ProductId: number;
  Amount: number;
  TotalValue: number;
  prodService: ProductsService;

  constructor(productId: number, amount: number)
  {
    this.ProductId = productId;
    this.Amount = amount;
    this.prodService = Injector.create({ providers: [{ provide: ProductsService }]  }).get(ProductsService);
    this.CalculateTotalValue();
  }

  AddAmount(amount: number): void
  {
    this.Amount += amount;

    this.CalculateTotalValue();
  }

  SubAmount(amount: number): void
  {
    let newAmount = this.Amount - Math.min(amount, 0);

    if(newAmount < 0)
    {
      newAmount = 0;
    }
    this.Amount = newAmount;

    this.CalculateTotalValue();
  }

  CalculateTotalValue(): void
  {
    if(this.prodService)
    {
      if(this.ProductId >= 0)
      {
        const prod = this.prodService.GetById(this.ProductId);
        this.TotalValue = prod.Price * this.Amount;
      }
    }
  }
}
