import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  constructor(public af: AngularFire){


    this.af.auth.subscribe(auth => {
      // Sets name of authenticated user
      if(auth){
        this.name = auth;
      }
    })
  }

}
