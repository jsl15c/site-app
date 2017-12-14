import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.min.css']
})
export class HeaderComponent implements OnInit {

  isOpen:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
      this.isOpen = !this.isOpen;
  }

}
