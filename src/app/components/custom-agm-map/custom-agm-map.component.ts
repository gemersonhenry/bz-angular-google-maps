import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LatLngBounds } from '@agm/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';

import {
  INITIAL_ZOOM, INITIAL_LAT, INITIAL_LNG, MARKER_DOWN, MARKER_UP,
} from './custom-agm-map.config';
import { Marker, MapStoreService } from './custom-agm-map.model';
import { IParamsConfig, IDataToEmit, IMarker } from './custom-agm-map.interface';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'custom-agm-map',
  templateUrl: './custom-agm-map.component.html',
  styleUrls: ['./custom-agm-map.component.sass']
})
export class CustomAgmMapComponent {

  @Input()
  public config: IParamsConfig;

  @Output()
  public boundsChangeEvent: EventEmitter<IDataToEmit> = new EventEmitter();

  @Output()
  public idleEvent: EventEmitter<IDataToEmit> = new EventEmitter();

  @Output()
  public readyEvent: EventEmitter<{}> = new EventEmitter();

  public markerImageUrl: string = MARKER_DOWN;
  public customMarker: Marker = {} as Marker;
  public lat: number;
  public lng: number;
  public zoom: number;

  constructor(
    public mapStoreService: MapStoreService,
  ) {}

  private get dataToEmit(): IDataToEmit {
    const { mapLat, mapLng, mapCenter } = this.mapStoreService;
    const e = {
      mapCenter: {
        lat: mapLat, lng: mapLng,
        center: mapCenter,
      }
    };
    return e;
  }

  public setInitialConfiguration() {
    this.customMarker = new Marker({
      lat: INITIAL_LAT,
      lng: INITIAL_LNG,
    });
    this.lat = INITIAL_LAT;
    this.lng = INITIAL_LNG;
    this.zoom = INITIAL_ZOOM;
  }

  // this event is triggered each time the map moves
  public mapBoundsChangeEvent(latLng: LatLngBounds) {
    if (this.markerImageUrl !== MARKER_UP) {
      this.markerImageUrl = MARKER_UP;
    }
    this.customMarker = new Marker(latLng.getCenter().toJSON() as IMarker);
    this.boundsChangeEvent.emit(this.dataToEmit);
  }

  // this event is triggered each time the map is stopped
  public mapIdleEvent() {
    this.markerImageUrl = MARKER_DOWN;
    this.idleEvent.emit(this.dataToEmit);
  }

  // this event is triggered only once after map is loaded
  public mapReadyEvent(map: GoogleMap) {
    this.readyEvent.emit({});
    this.mapStoreService.map = map;
    this.setInitialConfiguration();
  }

}
