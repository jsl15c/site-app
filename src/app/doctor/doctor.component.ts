import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.min.css']
})
export class DoctorComponent implements OnInit {

  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
  }

}
