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
