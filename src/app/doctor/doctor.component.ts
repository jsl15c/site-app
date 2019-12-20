import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import Peer from 'peerjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.min.css']
})
export class DoctorComponent implements OnInit {
  
  peer:any;
  conn:any;
  message:string;
  videoStream:any;
  localStream:any;
  audioEl:any;
  
  constructor() { }
    
  ngOnInit() {
    const peer = new Peer('456',{
      host: 'localhost',
      port: 3000,
      path: '/peer'
    })
    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        // Will print 'hi!'
        console.log(data);
      });
    });
    peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({ video: false, audio: true }) 
      .then((stream) => {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', (remoteStream) => {
          document.getElementsByTagName('audio').srcObject = remoteStream
          document.getElementsByTagName('audio').play()
        });
      }) 
      .catch((err) => {
        console.error('Failed to get local stream', err);
      });
    });
    this.peer = peer;
  }
  
  connect() {
    // conn.send('hello')
    const conn = this.peer.connect('123');
      conn.on('open', () => {
        conn.send('Connected to doctor');
      });
      this.conn = conn;
    // navigator.mediaDevices.getUserMedia({ video: false, audio: true })
    //   .then((stream) => {
    //     const call = this.peer.call('123', stream);
    //     call.on('stream', (remoteStream) => {
    //       document.getElementById('audio').srcObject = remoteStream
    //       document.getElementById('audio').play()
    //     });
    //   }) 
    //   .catch((err) => {
    //     console.error('Failed to get local stream', err);
    //   });
  }

  startEm() {
    if (this.conn) {
      this.conn.send('em');
    }
    // this.message = '';
  }


}
