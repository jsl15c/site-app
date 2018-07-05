import { Component, OnInit } from '@angular/core';
import {BlogComponent} from '../blog/blog.component';
import {SignupComponent} from '../signup/signup.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.min.css']
})
export class HomeComponent implements OnInit {

  isLoaded:Boolean = false;
  errorMsg:string;

  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
    this.isLoaded = true;
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
