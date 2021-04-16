import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductDetailsComponent } from './Pages/ProductPages/product-details/product-details.component';
import { SearchComponent } from './Pages/Search/search/search.component';
import { UserDetailsComponent } from './Pages/UserPages/user-details/user-details.component';

const routes: Routes =
[
  { path: '', pathMatch: 'full', redirectTo: 'Home', },
  { path: 'Home', component: HomeComponent },
  { path: 'ProductDetails/:id', component: ProductDetailsComponent},
  { path: 'UserDetails/:id', component: UserDetailsComponent},
  { path: 'Search/:s', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
