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



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    RecycleBinComponent,
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
