import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],

})
export class ChatComponent implements OnInit {
  items: FirebaseListObservable<any>;
  name: any;
  state: string = '';
  msgVal: string = '';
  constructor(public af: AngularFire,private router: Router) {

    this.items = af.database.list('/messages', {
      query: {
        // Shows last 5 messages
        limitToLast: 5
      }
    })

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  //Logout method
    logout(){
      this.af.auth.logout()
      this.router.navigateByUrl('/login');
    }

    chatSend(theirMessage: string){
      //Store message and user name in object
      this.items.push({message:theirMessage, name: this.name.auth.displayName })//this.name.facebook.displayName
      this.msgVal = '';
    }





  ngOnInit() {
  }

}
