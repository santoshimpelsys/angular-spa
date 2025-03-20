import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AiTrendsComponent } from './ai-trends/ai-trends.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { ContactAddressComponent } from './contactus/contact-address/contact-address.component';
import { ContactFormComponent } from './contactus/contact-form/contact-form.component';
import { ContactGmapComponent } from './contactus/contact-gmap/contact-gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AiTrendsComponent,
    RegistrationComponent,
    ContactusComponent,
    SignupComponent,
    ContactAddressComponent,
    ContactFormComponent,
    ContactGmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
