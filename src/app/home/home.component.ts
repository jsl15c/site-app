import { Component, OnInit } from '@angular/core';
import {BlogComponent} from '../blog/blog.component';
import {SignupComponent} from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.min.css']
})
export class HomeComponent implements OnInit {

  isLoaded:Boolean = false;

  constructor(
  ) { }

  ngOnInit() {
    this.isLoaded = true;
  }
}
