
export class ProductCategoryModel
{
  Id: number;
  Name: string;

  products: Array<number>;

  constructor()
  {
    this.products = new Array<number>();
  }

  AddProduct(prodId: number): void
  {
    if(!this.IsProductOnThisCategory(prodId))
    {
      this.products.push(prodId);
    }
  }

  RemoveProduct(prodId: number): void
  {
    if(this.IsProductOnThisCategory(prodId))
    {
      const index = this.products.findIndex(id => id == prodId);

      this.products.splice(index, 1);
    }
  }

  IsProductOnThisCategory(prodId: number) : boolean
  {
    if(prodId && this.products.find(id => id == prodId))
    {
      return true;
    }
    return false;
  }
}
