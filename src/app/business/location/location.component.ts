import { Component, OnInit } from '@angular/core';
import { LatLngBounds } from '@agm/core';

import {
 INITIAL_ZOOM, INITIAL_LAT, INITIAL_LNG, MARKER_DOWN, MARKER_UP, DRAGSTART_EVENT, DRAGEND_EVENT
} from './location-config';
import { Marker } from './location-model';

@Component({
  selector: 'bz-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {

  public mapInstance;

  public zoom: number = INITIAL_ZOOM;
  public lat: number = INITIAL_LAT;
  public lng: number = INITIAL_LNG;
  public customMarker: Marker;
  public markerImageUrl = MARKER_DOWN;

  constructor() {
  }

  ngOnInit() {
    this.customMarker = new Marker({
      lat: this.lat,
      lng: this.lng,
    });
  }

  public mapBoundsChangeEvent(latLng: LatLngBounds) {
    if (this.markerImageUrl !== MARKER_UP) {
      this.markerImageUrl = MARKER_UP;
    }
    const { lat, lng } = latLng.getCenter().toJSON();
    this.customMarker.lat = lat;
    this.customMarker.lng = lng;
  }

  // este evento se lanza despues que el 'dragend'
  public mapIdleEvent() {
    console.log('idle');
    this.markerImageUrl = MARKER_DOWN;
  }

  public mapDragstartEvent() {
    console.log('dragstart');
  }

  public mapDragendEvent() {
    console.log('dragend');
  }

  public mapReadyEvent(map: any) {
    this.mapInstance = map;
    this.mapInstance.addListener(DRAGSTART_EVENT, this.mapDragstartEvent);
    this.mapInstance.addListener(DRAGEND_EVENT, this.mapDragendEvent);
  }
}
