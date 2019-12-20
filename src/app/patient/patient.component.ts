import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  peer:any;
  conn:any;
  videoStream: any;
  showEmdr:boolean = false;
  isConnected:boolean = false;
  audioEl:HTMLAudioElement;

  constructor() { }

  ngOnInit() {
    const peer = new Peer('123', {
      host: window.location.hostname,
      port: (window.location.hostname == 'localhost') ? 3000 : 0,
      path: '/peer'
    })
    peer.on('connection', (conn) => {
      this.isConnected = true;
      conn.on('data', (data) => {
        // Will print 'hi!'
        console.log(data);
        if (data == 'em') {
          console.log('starting eyemovement');
          this.showEmdrFrame();
        }
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
            // Show stream in some <video> element.
          });
        })
        .catch((err) => {
          console.error('Failed to get local stream', err);
        });
    });
    this.peer = peer;
  }

  showEmdrFrame() {
    this.showEmdr = true;
  }

  connect() {
    const conn = this.peer.connect('456');
    // conn.on('open', () => {});
  }

}
