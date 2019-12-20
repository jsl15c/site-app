import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import Peer from 'peerjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.min.css']
})
export class DoctorComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    const peer = new Peer('123')
    const conn = peer.connect('456');
    conn.on('open', () => {
      conn.send('Connected');
    });
    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        // Will print 'hi!'
        console.log(data);
      });
    });
  }


}
