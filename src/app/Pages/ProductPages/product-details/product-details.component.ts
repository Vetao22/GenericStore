import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ProductModel } from 'src/app/Models/Product';
import { CartService } from 'src/app/Services/CartService';
import { LoginService } from 'src/app/Services/LoginService';
import { ProductsService } from 'src/app/Services/ProductsService';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit
{
  prod: ProductModel;

  constructor(private prodService: ProductsService, public loginService: LoginService,
              public cartService: CartService, public route: ActivatedRoute)
  {
     let id;

     route.paramMap.subscribe((params) =>
       {
         id = params.get('id');
         this.prod = prodService.Products.find((p) => p.Id == id);

         if(this.prod == null)
         {

         }
       });
  }

  ngOnInit(): void
  {
  }

  Favorite(): void
  {
      if(this.loginService.logged)
      {
        if(!this.loginService.user.IsProductFavorite(this.prod.Id))
        {
          this.loginService.user.AddFavorite(this.prod.Id);
          ++this.prod.Favorite;
        }
        else
        {
          this.loginService.user.RemoveFavorite(this.prod.Id);
          --this.prod.Favorite;
        }
      }
  }

  AddToCart(): void
  {
    this.cartService.AddProduct(this.prod.Id, 1);
  }
}
