import type * as mapboxgl from 'mapbox-gl';
import type { AmzLogisticSite } from './amz-logistics-site';

export interface MapMarker {
    id: string;
    marker: mapboxgl.Marker;
    site: AmzLogisticSite;
}