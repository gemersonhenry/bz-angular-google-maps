export interface IMarker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

export const INITIAL_LAT = -12.0733696;
export const INITIAL_LNG = -77.021184;
export const INITIAL_ZOOM = -77.021184;

export const DEFAULT_MARKERS = [
  {
    lat: 51.673858,
    lng: 7.815982,
    label: 'A',
    draggable: true
  },
  {
    lat: 51.373858,
    lng: 7.215982,
    label: 'B',
    draggable: false
  },
  {
    lat: 51.723858,
    lng: 7.895982,
    label: 'C',
    draggable: true
  }
];

export class Marker {

  public lat: number;
  public lng: number;
  public label: string;
  public draggable: boolean;

  constructor(data) {
    this.lat = data.lat || 0;
    this.lng = data.lng || 0;
    this.label = data.label || '';
    this.draggable = data.draggable || false;
  }
}
