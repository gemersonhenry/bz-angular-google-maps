import { IMarker } from './location-interface';

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
