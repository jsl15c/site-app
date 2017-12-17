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
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.userService.checklogin()
    .then((resultFromApi) => {
      // this.isLoggedOut = false;
      console.log(resultFromApi);
      if (resultFromApi.userType === "admin") {
        this.router.navigate(['/admin']);
        this.userService.currentUser = resultFromApi;
      }
  })
  .catch((err) => {
    if(err) {
      this.router.navigate(['/']);
      return;
    }
  });
}

}
