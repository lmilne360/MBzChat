import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(public af: AngularFire){
    this.items = af.database.list('/messages', {
      query: {
        // Shows last 5 messages
        limitToLast: 5
      }
    })

    this.af.auth.subscribe(auth => {
      // Sets name of authenticated user
      if(auth){
        this.name = auth;
      }
    })
  }

// Create a login method
//Set prodiver to Facebook
// Set  to popup instead of redirect to facebook
  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

//Logout method
  logout(){
    this.af.auth.logout()
  }

  chatSend(theirMessage: string){
    //Store message and user name in object
    this.items.push({message:theirMessage, name: this.name.facebook.displayName})
    this.msgVal = '';
  }

}
