import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { IMarker, DEFAULT_MARKERS, INITIAL_ZOOM, INITIAL_LAT, INITIAL_LNG } from './location-config';

@Component({
  selector: 'bz-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {

  public zoom = INITIAL_ZOOM;
  public lat = INITIAL_LAT;
  public lng = INITIAL_LNG;
  public markers: IMarker[] = DEFAULT_MARKERS;

  constructor() {
    console.log('LocationComponent => constructor');
  }

  ngOnInit() {
    console.log('LocationComponent => ngOnInit');
  }

  mapClickEvent($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(m: IMarker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}
