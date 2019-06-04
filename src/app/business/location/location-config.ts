import { Marker } from './location-model';

export const INITIAL_LAT = -12.0838224;
export const INITIAL_LNG = -77.012051;
export const INITIAL_ZOOM = 15;

export const MARKER_UP = '../../../assets/images/marker-0.png';
export const MARKER_DOWN = '../../../assets/images/marker-1.png';
export const MARKER_FIXED = '../../../assets/images/marker-2.png';

const markers = [
  {
    lat: INITIAL_LAT,
    lng: INITIAL_LNG,
    label: 'A',
    draggable: false
  },
  {
    lat: -12.0533696,
    lng: -77.041184,
    label: 'B',
    draggable: false
  },
  {
    lat: -12.0833696,
    lng: -77.051184,
    label: 'C',
    draggable: true
  }
];

export const DEFAULT_MARKERS = markers.map((marker) => {
  return new Marker(marker);
});
