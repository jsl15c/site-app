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
  userType:string = 'patient';
  channelType:string = 'search';
  otherType:string;
  otherChannel:string;
  emailCode:string;
  errorMsg:string;
  isPatient:boolean = true;

  showForm:boolean = true;
  enterCode:boolean = false;
  verified:boolean = false;

  types:any[] = ['doctor', 'patient', 'wellness professional', 'investor'];
  channels:any[] = ['word of mouth', 'search', 'social media'];


  constructor(
    public userService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.list();
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
      this.email, this.userType, this.channelType, this.otherType, this.otherChannel, this.password)
      .then((resultFromApi) => {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.userType = "";
        this.channelType = "";
        this.otherType = "";
        this.otherChannel = "";
        this.password = "";
        this.errorMsg = "";
        this.enterCode = true;
        this.showForm = false;
      })
      .catch((err) => {
        console.log(err);
        this.errorMsg = err.message;
      });
    }

    verify() {
      this.userService.verify(this.emailCode)
        .then((resultFromApi) => {
          this.emailCode = "";
          this.errorMsg = "";
          this.enterCode = false;
          this.verified = true;
          setTimeout(()=> {
            this.showForm = true;
            this.verified = false;
          }, 5000)
          this.router.navigate(['/']);
        })
        .catch((err) => {
          const parsedError = err.json();
          this.errorMsg = parsedError.message;
        });
      }

      list() {
        this.userService.list()
        .then((result) => {
          this.userService.allUsers = result;
        })
        .catch((err)=> {
          const parsedError = err.json();
          this.errorMsg = parsedError;
        });
      }
}
