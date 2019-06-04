import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LatLngBounds } from '@agm/core';
import { MVCObject } from '@agm/core/services/google-maps-types';

import {
  INITIAL_ZOOM, INITIAL_LAT, INITIAL_LNG, MARKER_DOWN,
  MARKER_UP, DRAGSTART_EVENT, DRAGEND_EVENT,
} from './custom-agm-map.config';
import { Marker } from './custom-agm-map.model';
import { IParamsConfig } from './custom-agm-map.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'custom-agm-map',
  templateUrl: './custom-agm-map.component.html',
  styleUrls: ['./custom-agm-map.component.sass']
})
export class CustomAgmMapComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('paramsConfig')
  public config: IParamsConfig;

  @Output()
  public idleEvent: EventEmitter<{}> = new EventEmitter();

  @Output()
  public dragstartEvent: EventEmitter<{}> = new EventEmitter();

  @Output()
  public dragendEvent: EventEmitter<{}> = new EventEmitter();

  public mapInstance: MVCObject;

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

  public mapReadyEvent(map: MVCObject) {
    this.mapInstance = map;
    this.mapInstance.addListener(DRAGSTART_EVENT, this.mapDragstartEvent);
    this.mapInstance.addListener(DRAGEND_EVENT, this.mapDragendEvent);
  }

}
