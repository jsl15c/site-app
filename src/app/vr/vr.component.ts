import { Component, OnInit } from '@angular/core';
declare var require: any;
require('aframe-animation-component');

@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.min.css']
})
export class VrComponent implements OnInit {

  num:number = 0;
  countUp:boolean = true;
  isSphere:boolean = true;

  constructor() { }

  ngOnInit() {
    // this.timer();
  }

  getSceneComponent() {
    return document.getElementById('scene');
  }

  // <a-sphere id = "sphere" position = "0 1.25 -5" radius = "1.25" color = "#EF2D5E" > </a-sphere>
  getSphereComponent() {
    this.isSphere = !this.isSphere;
    // console.log('test 123');
    // let newSphere = document.createElement('a-sphere');
    // let sphereRoot = document.createElement('a-entity');
    // newSphere.setAttribute('position', `0 ${this.num} -6`);
    // if (this.num < 5 && !this.boolNum) {
    //   if (this.num === 4) {
    //     this.boolNum = !this.boolNum;
    //     this.num = 0;
    //   }
    // } else {
    //   newSphere.setAttribute('position', `${this.num} 4 -6`);
    // }
    // newSphere.setAttribute('color',  `${color}`);
    // newSphere.setAttribute('transition', `0.5s ease-in`);
    // newSphere.setAttribute('radius', `${this.num}`);
    // sphereRoot.appendChild(newSphere);
    // this.getSceneComponent().appendChild(sphereRoot);
    // this.num++;
    // this.colorNum += 50;
  }

  timer() {
    let text = document.getElementById('text');
    console.log(text);
    setInterval(()=> {
      if (this.countUp) {
        this.num++;
        if (this.num > 8) {
          this.countUp = false;
          this.num--;
        }
      } else {
        this.num--;
        if (this.num === 0) {
          this.countUp = true;
          this.num++;
        }
      }
      text.setAttribute('value', `${this.num}`);
    },1000)
  }
}