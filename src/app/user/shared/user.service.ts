import { Injectable } from '@angular/core';
import {Http } from '@angular/http'
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Global } from 'src/global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

global:Global;



constructor(private http:Http,private httpClient:HttpClient) { }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders();
    reqHeader.append('Content-Type','application/x-www-urlencoded');
    reqHeader.append('No-Auth','True');
    var options = { headers: reqHeader };
    return this.httpClient.post(this.global.rootUrl + '/token', data, options);
  }
}
