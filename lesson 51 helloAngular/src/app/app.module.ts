import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RangeComponent } from './range/range.component';
import { SettingsComponent } from './settings/settings.component';
import { routes } from './routing';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UtilityService } from './utility.service';
import { AlertComponent } from './alert/alert.component';
import { FirstUpperPipe } from './first-upper.pipe';
import { SearchPipe } from './search.pipe';
import { SquareComponent } from './square/square.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    FooterBarComponent,
    ContactComponent,
    UsersComponent,
    RangeComponent,
    SettingsComponent,
    HomeComponent,
    GalleryComponent,
    AlertComponent,
    FirstUpperPipe,
    SearchPipe,
    SquareComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule { }
