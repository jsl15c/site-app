import { Component, OnInit } from '@angular/core';
// import aframe from 'aframe';
import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.scss']
})
export class VrComponent extends PatientComponent {

  showEmdr = this.showEmdr

  constructor() { 
    super();
  }

  ngOnInit() {
    console.log(this.peer)
    console.log('test')
    console.log(this.showEmdr)
  }

}
