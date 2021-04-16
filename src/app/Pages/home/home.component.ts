import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Models/Product';
import { ProductsService } from 'src/app/Services/ProductsService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  carouselProducts: Array<ProductModel>;

  constructor(public prodService: ProductsService)
  {
    this.GetCarouselProducts();
  }

  ngOnInit(): void
  {

  }

  GetCarouselProducts(): void
  {
    let indices = [];

    this.carouselProducts = new Array<ProductModel>();

    const max = this.prodService.Products.length - 1;

    for(let x = 0; x < 5; x++)
    {
      const index = Math.floor(Math.random() * max) + 1;

      indices = this.AddIndexToArray(index, indices);
    }

    for(let x = 0; x < indices.length; x++)
    {
        this.carouselProducts.push(this.prodService.Products[indices[x]]);
    }
  }

  AddIndexToArray(index: number, indices: Array<number>): Array<number>
  {
    for(let x = 0; x < indices.length; x++)
    {
        if(indices[x] == index)
        {
          return indices;
        }
    }

    indices.push(index);

    return indices;
  }
}
