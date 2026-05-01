import { Injectable } from "@angular/core";
import mapboxgl from "mapbox-gl";
import { environment } from "../../environments/environment.development";
import { Coords } from "../interfaces/amz-logistics-site";



@Injectable({
    providedIn: 'root'
})
export class MapService {

    private map!: mapboxgl.Map;
    private zoom: number = 9;
    private center: { lng: number, lat: number } = { lng: -100.31680805166252, lat: 25.686175181853933 }

    public initializeMap(element: HTMLDivElement) {
        mapboxgl.accessToken = environment.MAPBOX_KEY;
        this.map = new mapboxgl.Map({
            container: element,
            center: this.center,
            zoom: this.zoom
        });

        this.map.addControl(new mapboxgl.FullscreenControl());
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(new mapboxgl.ScaleControl());

        return this.map;
    }

    public getMap(): mapboxgl.Map | null {
        return this.map || null;
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
}