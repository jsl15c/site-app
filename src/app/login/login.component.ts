import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.min.css']
})
export class LoginComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  errorMsg:string;

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

login() {
  this.userService.login(this.email, this.password)
  .then((resultFromApi) => {
    this.email= "",
    this.password = "",
    this.errorMsg = ""
    // routing
    this.userService.currentUser = resultFromApi;
    this.userService.isLoggedOut = false;
    if (this.userService.currentUser.userType == 'admin') {
      console.log(this.userService.currentUser);
      this.router.navigate(['/admin']);
    } else if (this.userService.currentUser.userType == 'doctor') {
      this.router.navigate(['/doctor']);
    } else if (this.userService.currentUser.userType == 'patient') {
      this.router.navigate(['/patient']);
    } else {
      this.router.navigate(['/']);
      return;
    }
  })
  .catch((err) => {
    const parsedError = err;
    return;
  });
}

}
