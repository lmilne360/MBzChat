import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


//Export firebaseConfig
export const firebaseConfig = {
  apiKey: 'AIzaSyCyLjsVKjZBjSSBRz2N5XUkl3vKHV76Qfc',
  authDomain: 'mbzapp-cd657.firebaseapp.com',
  databaseURL: 'https://mbzapp-cd657.firebaseio.com',
  storageBucket: 'mbzapp-cd657.appspot.com',
  messagingSenderId: '913522882345'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
