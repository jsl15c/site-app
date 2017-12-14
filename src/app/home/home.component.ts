import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.min.css']
})
export class HomeComponent implements OnInit {
  isLoaded:boolean = false;

  constructor() { }

  ngOnInit() {
    this.isLoaded = true;
  }


}
