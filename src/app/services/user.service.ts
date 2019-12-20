import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  isLoggedOut:boolean;

  currentUser: any = {};

  allUsers:any = [];

  constructor(private myHttp: HttpClient) { }

  // POST signup
  //  an argument for each req.body in API route
  signup(firstName, lastName, email, userType, channelType, otherType, otherChannel, password) {
    return this.myHttp
      .post(
        environment.apiBase + '/user-api/signup',
        // form body info to send to backend (req.body)
        {
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password,
          userType:userType,
          otherType:otherType,
          channelType:channelType,
          otherChannel:otherChannel
        },
        // send cookies across domains
        {withCredentials:true}
      )
      .toPromise()
      .then(res => res);
  }

  verify(emailCode) {
    return this.myHttp
      .post(
        environment.apiBase + '/user-api/verify',
        {
          emailCode:emailCode
        },
        {withCredentials:true}
      )
      .toPromise()
      .then(res => res);
  }

  // POST login
  login(email, password) {
    return this.myHttp.post(
      environment.apiBase + '/user-api/login',
      {
        email:email,
        password:password
      },
      {withCredentials:true}
    )
    .toPromise()
    .then(res => res);
  }

  // GET checklogin
  checklogin() {
    return this.myHttp.get(
      environment.apiBase + '/user-api/checklogin',
      // send cookies across domains
      {withCredentials:true},
    )
    .toPromise()
    .then(res => res);
  }

  list() {
    return this.myHttp.get(
      environment.apiBase + '/user-api/list',
      // send cookies across domains
      {withCredentials:true},
    )
    .toPromise()
    .then(res => res);
  }

  logout() {
    return this.myHttp.get(
      environment.apiBase + '/user-api/logout',
      { withCredentials: true },
    )
    .toPromise()
    .then(res => res);
  }
}
