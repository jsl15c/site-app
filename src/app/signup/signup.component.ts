import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.min.css']
})
export class SignupComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  userType:string;
  emailCode:string;
  errorMsg:string;
  isPatient:boolean = true;
  enterCode:boolean = false;


  constructor(
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectUser() {
    this.isPatient = !this.isPatient;
    if (this.isPatient) {
      this.userType = "patient";
    }
    else {
      this.userType = "professional";
    }
    console.log(this.userType);
  }

  signup() {
    this.userService.signup(this.firstName, this.lastName,
      this.email, this.userType, this.password)
      .then((resultFromApi) => {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.userType = "";
        this.password = "";
        this.errorMsg = "";
        this.enterCode = true;
      })
      .catch((err) => {
        alert('error submitting');
        const parsedError = err.json();
        this.errorMsg = parsedError.message;
      });
    }

    verify() {
      this.userService.verify(this.emailCode)
        .then((resultFromApi) => {
          this.emailCode = "";
          this.errorMsg = "";
          this.router.navigate(['/']);
        })
        .catch((err) => {
          alert('error submitting');
          const parsedError = err.json();
          this.errorMsg = parsedError.message;
        });
      }
}
