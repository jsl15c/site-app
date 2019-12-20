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
  audioEl:HTMLAudioElement;
  
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
          if (!this.audioEl) {
            let audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.play()
            this.audioEl = audio;
          } else {
            this.audioEl.srcObject = remoteStream;
          }
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
    navigator.mediaDevices.getUserMedia({ video: false, audio: true })
      .then((stream) => {
        const call = this.peer.call('123', stream);
        call.on('stream', (remoteStream) => {
          if (!this.audioEl) {
            let audio = document.createElement('audio');
            audio.srcObject = remoteStream;
            audio.play()
            this.audioEl = audio;
          } else {
            this.audioEl.srcObject = remoteStream;
          }
        });
      }) 
      .catch((err) => {
        console.error('Failed to get local stream', err);
      });
  }

  startEm() {
    if (this.conn) {
      this.conn.send('em');
    }
    // this.message = '';
  }


}
