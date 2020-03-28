import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authServ.SignUp(this.email, this.password);
  }

}
