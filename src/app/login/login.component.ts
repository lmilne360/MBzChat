import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      // Sets name of authenticated user
      if(auth){
        this.router.navigateByUrl('/chat');
      }
    })
  }

  ngOnInit() {
  }

  // Create a login method
  //Set prodiver to Facebook
  // Set  to popup instead of redirect to facebook
    loginFB() {
      this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup,
      }).then(
        (success) => {
        this.router.navigate(['/chat']);
      }).catch(
        (err) => {
        this.error = err;
      })
    }

    //Google login method
    loginGoogle() {
      this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup,
      }).then(
        (success) => {
        this.router.navigate(['/chat']);
      }).catch(
        (err) => {
        this.error = err;
      })
    }

}
