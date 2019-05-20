import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService:UserService) { }

  ngOnInit() {
  }

  onUserLogin(form:NgForm)
  {
    let username = form.value.username;
    let password = form.value.password;
    this.UserService.userAuthentication(username,password).subscribe(
      (response:Response)=>{
        console.log(response);
      }
    )
     
  }

}
