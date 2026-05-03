import { Injectable } from "@angular/core";
import mapboxgl from "mapbox-gl";
import { environment } from "../../environments/environment.development";
import { Coords } from "../interfaces/amz-logistics-site";
import { MapMarker } from "../interfaces/marker";



@Injectable({
    providedIn: 'root'
})
export class MapService {

    private map!: mapboxgl.Map;
    private zoom: number = 9;
    private center: { lng: number, lat: number } = { lng: -100.31680805166252, lat: 25.686175181853933 }
    private markers: MapMarker[] = [];

    public initializeMap(element: HTMLDivElement) {
        mapboxgl.accessToken = environment.MAPBOX_KEY;
        this.map = new mapboxgl.Map({
            container: element,
            center: this.center,
            zoom: this.zoom
        });

        this.map.addControl(new mapboxgl.FullscreenControl());
        this.map.addControl(new mapboxgl.NavigationControl());

        return this.map;
    }

    public getMap(): mapboxgl.Map | null {
        return this.map || null;
    }

    public addMarker(marker: MapMarker) {
        this.markers.push(marker);
    }

    public getPrevAndNextMarker(id: string): { prevMarker: MapMarker, nextMarker: MapMarker } {
        const index = this.markers.findIndex(marker => marker.id === id);
        let prevMarker = this.markers[index - 1] || null;
        if (prevMarker === null) {
            prevMarker = this.markers[this.markers.length - 1];
        }
        let nextMarker = this.markers[index + 1] || null;
        if (nextMarker === null) {
            nextMarker = this.markers[0];
        }
        return { prevMarker, nextMarker };
    }

    public resetMapPosition() {
        this.map.flyTo({
            center: this.center,
            zoom: this.zoom,
            essential: true
        });
    }

    public flyTo(coords: Coords, zoom: number) {
        this.map.flyTo({
            center: coords,
            zoom,
            essential: true
        });
    }

    public createMiniMap(element: HTMLDivElement, coordinates: Coords, zoom: number, markerColor?: string) {
        const map = new mapboxgl.Map({
            container: element,
            center: coordinates,
            zoom: zoom,
            interactive: false,
            pitch: 30,
        });

        new mapboxgl.Marker({
            color: markerColor || '#00C0F5',
            draggable: false
        })
            .setLngLat(coordinates)
            .addTo(map);

    }
}