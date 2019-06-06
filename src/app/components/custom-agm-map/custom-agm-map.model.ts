import { IMarker } from './custom-agm-map.interface';
import { GoogleMap, LatLngLiteral } from '@agm/core/services/google-maps-types';

export class MapStoreService {

  // tslint:disable-next-line: variable-name
  private _map: GoogleMap;

  constructor() {}

  public set map(map: GoogleMap) {
    this._map = map;
  }

  public get map(): GoogleMap {
    return this._map;
  }

  public get mapLat(): number {
    const { map } = this;
    return map ? map.getCenter().toJSON().lat : null;
  }

  public get mapLng(): number {
    const { map } = this;
    return map ? map.getCenter().toJSON().lng : null;
  }

  public get mapZoom(): number {
    const { map } = this;
    return map ? map.getZoom() : null;
  }

  public get mapCenter(): LatLngLiteral {
    const { map } = this;
    return map ? map.getCenter().toJSON() : {};
  }
}

export class Marker {

  public lat: number;
  public lng: number;
  public label: string;
  public draggable: boolean;

  constructor(data: IMarker) {
    this.lat = data.lat || -11;
    this.lng = data.lng || -75;
    this.label = data.label || '';
    this.draggable = data.draggable || false;
  }
}
