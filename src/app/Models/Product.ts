
export class ProductModel
{
    Id: number;
    Name: string;
    Description: string;
    Price: number;
    ThumbnailUrl: string;
    Favorite: number;
    ProducCategoryId: number

    constructor()
    {
      this.Favorite = 0;
    }
}
