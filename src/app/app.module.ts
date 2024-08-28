import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenucardComponent } from './menucard/menucard.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';
// import 'localstorage-polyfill'

@NgModule({
  declarations: [
    AppComponent,
    MenucardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    ThankyouComponent,
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp({
      // apiKey: "AIzaSyCEaPmqWWH4Jue0QCgREwwHgJhhZ1nd-lI",
      // authDomain: "menuqr-41ae5.firebaseapp.com",
      // projectId: "menuqr-41ae5",
      // storageBucket: "menuqr-41ae5.appspot.com",
      // messagingSenderId: "277119823052",
      // appId: "1:277119823052:web:ac5912e344f4692ce56669"
        apiKey: "AIzaSyBTOeLj3k0tLdlm7r-vAyiXmm7uqCNyR9A",
        authDomain: "menuqrwala.firebaseapp.com",
        projectId: "menuqrwala",
        storageBucket: "menuqrwala.appspot.com",
        messagingSenderId: "843556331213",
        appId: "1:843556331213:web:ca6bf6d76092b6a68a5384"
    })),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideClientHydration(),
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // global: any['localStorage'] = localStorage;
}
