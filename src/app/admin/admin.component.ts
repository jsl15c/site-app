import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.min.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.userService.checklogin()
    .then((resultFromApi) => {
      console.log(resultFromApi);
      // this.isLoggedOut = false;
      // if (resultFromApi.userType === "admin") {
        // this.userService.currentUser = resultFromApi;
        // this.list();
        // this.router.navigate(['/admin']);
        return;
      // }
  })
  .catch((err) => {
    if(err) {
      this.router.navigate(['/']);
      return;
    }
  });
}

list() {
  this.userService.list()
  .then((resultFromApi) => {
    this.userService.allUsers = resultFromApi;
    return;
  })
  .catch((err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

logout() {
  this.userService.logout()
  .then((result) => {
    this.checkLogin();
    return;
  })
}

}
