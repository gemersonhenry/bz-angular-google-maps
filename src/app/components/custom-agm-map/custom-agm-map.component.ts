import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { LatLngBounds } from '@agm/core';

import {
  INITIAL_ZOOM, INITIAL_LAT, INITIAL_LNG, MARKER_DOWN,
  MARKER_UP, DRAGSTART_EVENT, DRAGEND_EVENT,
} from './custom-agm-map.config';
import { Marker } from './custom-agm-map.model';
import { IParamsConfig, IDataToEmit } from './custom-agm-map.interface';
import { GoogleMap, LatLngLiteral } from '@agm/core/services/google-maps-types';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'custom-agm-map',
  templateUrl: './custom-agm-map.component.html',
  styleUrls: ['./custom-agm-map.component.sass']
})
export class CustomAgmMapComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: no-input-rename
  @Input('paramsConfig')
  public config: IParamsConfig;

  @Output()
  public idleEvent: EventEmitter<{}> = new EventEmitter();

  @Output()
  public dragstartEvent: EventEmitter<{}> = new EventEmitter();

  @Output()
  public dragendEvent: EventEmitter<{}> = new EventEmitter();


  public zoom: number = INITIAL_ZOOM;
  public lat: number = INITIAL_LAT;
  public lng: number = INITIAL_LNG;
  public markerImageUrl: string = MARKER_DOWN;
  public mapInstance: GoogleMap | null;
  public customMarker = new Marker({
    lat: this.lat,
    lng: this.lng,
  });

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    if (this.mapInstance) {
      console.log('ngOnChanges');
    }
  }

  private get mapCenter(): LatLngLiteral {
    const { mapInstance } = this;
    return mapInstance.getCenter().toJSON();
  }

  private get dataToEmit(): IDataToEmit {
    const { mapCenter } = this;
    const e = {
      mapCenter,
    };
    console.log('dataToEmit: ', e);
    return e;
  }

  public setInitialConfiguration() {
    console.log('setInitialConfiguration');
    this.customMarker.lat = INITIAL_LAT;
    this.customMarker.lng = INITIAL_LNG;
    this.mapInstance.setOptions({
      center: { lat: INITIAL_LAT, lng: INITIAL_LNG },
      zoom: INITIAL_ZOOM,
    })
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
    this.markerImageUrl = MARKER_DOWN;
    const { dataToEmit } = this;
    this.idleEvent.emit(dataToEmit);
  }

  public mapDragstartEvent() {
    const { dataToEmit } = this;
    this.dragstartEvent.emit(dataToEmit);
  }

  public mapDragendEvent() {
    const { dataToEmit } = this;
    this.dragendEvent.emit(dataToEmit);
  }

  public mapReadyEvent(map: GoogleMap) {
    this.mapInstance = map;
    this.mapInstance.addListener(DRAGSTART_EVENT, this.mapDragstartEvent);
    this.mapInstance.addListener(DRAGEND_EVENT, this.mapDragendEvent);
  }

}
