import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authServ: AuthService,
    private router: Router
  ) { }

  email: string;
  password: string;

  ngOnInit(): void {
  }

  signUp() {
    this.authServ.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authServ.SignIn(this.email, this.password);
    // this.email = '';
    // this.password = '';
  }

  signOut() {
    //this.authServ.SignOut();
  }

  createAcc() {
    this.router.navigate(['create']);
  }

}
