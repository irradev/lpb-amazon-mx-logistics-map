import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-buildings-pages',
  imports: [],
  templateUrl: './buildings-page.html',

})
export class BuildingsPage implements AfterViewInit {
  public divElement = viewChild<ElementRef<HTMLDivElement>>('map');
  public map = signal<mapboxgl.Map | null>(null);
  public zoom = signal(14);
  public coordinates = signal({ lng: -71.1591, lat: 42.3158 });

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    mapboxgl.accessToken = environment.MAPBOX_KEY;

    const map = new mapboxgl.Map({
      container: element,
      center: this.coordinates(),
      zoom: this.zoom()
    });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());
    this.map.set(map);
    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('zoomend', (event: mapboxgl.MapEvent) => {
      const zoom = event.target.getZoom();
      this.zoom.set(zoom);
    });

    map.on('moveend', (event: mapboxgl.MapEvent) => {
      // también map.getCenter();
      const coordinates = event.target.getCenter();
      this.coordinates.set({ lng: coordinates.lng, lat: coordinates.lat });
    });

    map.on('load', () => {
      console.log('map loaded');
    });


  }
}


