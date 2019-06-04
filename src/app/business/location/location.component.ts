import { Component, OnInit } from '@angular/core';
import { MouseEvent, LatLngBounds, LatLng } from '@agm/core';
import {
  DEFAULT_MARKERS, INITIAL_ZOOM, INITIAL_LAT, INITIAL_LNG, MARKER_DOWN, MARKER_UP
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
      lat: INITIAL_LAT,
      lng: INITIAL_LNG,
      draggable: false
    });
  }

  public mapBoundsChangeEvent($event: LatLngBounds) {
    if (this.markerImageUrl !== MARKER_UP) {
      this.markerImageUrl = MARKER_UP;
    }    
    const centerJSON = $event.getCenter().toJSON();
    this.customMarker.lat = centerJSON.lat;
    this.customMarker.lng = centerJSON.lng;
  }

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

  public mapReadyEvent($event: any) {
    this.mapInstance = $event;
    this.mapInstance.addListener('dragstart', () => {
      this.mapDragstartEvent();
    });
    this.mapInstance.addListener('dragend', () => {
      this.mapDragendEvent();
    });
  }
}
