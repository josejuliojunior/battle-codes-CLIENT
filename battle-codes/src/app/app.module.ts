import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AdminSignInComponent } from './header/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './header/admin-sign-in/admin-sign-up/admin-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    AdminSignInComponent,
    AdminSignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
