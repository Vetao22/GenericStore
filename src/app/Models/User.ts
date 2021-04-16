import { Order } from "./Order";

export class UserModel
{
    Id: number;
    Name: string;
    Email: string;
    Password: string;
    ThumbnailUrl: string;
    Orders: Array<Order>;
    FavoriteProducts: Array<number>;

    constructor()
    {
      this.Orders = new Array<Order>();
      this.FavoriteProducts = new Array<number>();
    }

    AddFavorite(productId: number): void
    {
      if(!this.IsProductFavorite(productId))
      {
        this.FavoriteProducts.push(productId);
      }
    }

    RemoveFavorite(productId: number): void
    {
      if(this.IsProductFavorite(productId))
      {
        let index = this.FavoriteProducts.findIndex(id => id == productId);

        this.FavoriteProducts.splice(index, 1);
      }
    }

    IsProductFavorite(productId: number): boolean
    {
      if(this.FavoriteProducts.find(id => id == productId))
      {
        return true;
      }
      return false;
    }
}
