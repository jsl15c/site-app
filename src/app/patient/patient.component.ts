import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const peer = new Peer('456')
    const conn = peer.connect('123');
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
