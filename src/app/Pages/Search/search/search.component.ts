import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/Models/Product';
import { ProductCategoryService } from 'src/app/Services/ProductCategoryService';
import { ProductsService } from 'src/app/Services/ProductsService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit
{
  searchResult: Array<ProductModel>;

  constructor(private prodService: ProductsService, public route: ActivatedRoute,
           private prodCategService: ProductCategoryService)
  {
    this.searchResult = new Array<ProductModel>();
  }

  ngOnInit(): void
  {
    this.route.paramMap.subscribe((params) =>
       {
         const searchTerm = params.get('s');

         if(this.prodCategService.IsCategoryOnTheList(searchTerm))
         {
           this.searchResult = this.prodService.GetByCategory(this.prodCategService.GetByName(searchTerm).Id);

           return;
         }

         if(searchTerm)
         {
            this.searchResult = this.prodService.GetByName(searchTerm);
         }
       });
  }
}
