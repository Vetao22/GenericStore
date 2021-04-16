import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategoryService } from 'src/app/Services/ProductCategoryService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit
{
  public isMenuCollapsed = true;

  constructor(private router: Router, public prodCategService: ProductCategoryService) { }

  ngOnInit(): void
  {

  }

  Search(searchTerm: string): void
  {
    if(searchTerm)
    {
      this.router.navigate(['/Search', searchTerm]);
    }
  }

}
