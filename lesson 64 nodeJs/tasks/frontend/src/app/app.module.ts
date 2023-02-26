import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { UtilityService } from './Utilityservice';
import { HttpService } from './http.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecycleBinComponent } from './tasks/recycle-bin/recycle-bin.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MarketComponent } from './market/market.component';
import { ProductsManagmentComponent } from './market/products-managment/products-managment.component';
import { ProductComponent } from './market/products-managment/product/product.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './market/cart/cart.component';
import { ProductsComponent } from './market/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    RecycleBinComponent,
    TaskEditComponent,
    ErrorPageComponent,
    MarketComponent,
    ProductsManagmentComponent,
    ProductComponent,
    AboutComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    HttpService,
    UtilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
