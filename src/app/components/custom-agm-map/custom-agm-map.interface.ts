import { LatLngLiteral } from '@agm/core/services/google-maps-types';

export interface IMarker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

export interface IParamsConfig {
  zoom?: number;
  lat?: number;
  lng?: number;
}

export interface IDataToEmit {
  mapCenter: LatLngLiteral;
}