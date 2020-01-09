import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  markers: Marker[] = [];

  constructor() {
    if(localStorage.getItem('markers'))
    {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  addMarker(event){
    const lat = event.coords.lat;
    const lng = event.coords.lng;

    const marker = new Marker(lat, lng);
    this.markers.push(marker);

    this.saveStorage();
  }

  saveStorage(){
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  deleteMarker(i){
    this.markers.splice(i, 1);
    this.saveStorage();
  }
}
