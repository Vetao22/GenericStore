import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsService } from './Services/ProductsService';
import { ProductDetailsComponent } from './Pages/ProductPages/product-details/product-details.component';
import { UsersService } from './Services/UsersService';
import { UserDetailsComponent } from './Pages/UserPages/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrlValidator } from './Validators/UrlValidator';
import { FooterComponent } from './Pages/Footer/footer/footer.component';
import { NavBarComponent } from './Pages/Menu/nav-bar/nav-bar.component';
import { LoginComponent } from './Pages/LoginComponent/login/login.component';
import { LoginService } from './Services/LoginService';
import { CartService } from './Services/CartService';
import { CartComponent } from './Services/Cart/cart/cart.component';
import { SearchComponent } from './Pages/Search/search/search.component';
import { ProductCategoryService } from './Services/ProductCategoryService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    UserDetailsComponent,
    UrlValidator,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [ProductsService, UsersService, LoginService, CartService, ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
