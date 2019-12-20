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
  audioEl:any;
  showEmdr:boolean = false;
  isConnected:boolean = false;

  constructor() { }

  ngOnInit() {
    const peer = new Peer('123',{
      host: 'localhost',
      port: 3000,
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
            document.getElementsByTagName('audio').srcObject = remoteStream
            document.getElementsByTagName('audio').play()
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
