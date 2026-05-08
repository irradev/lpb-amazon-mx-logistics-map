import { AfterViewInit, Component, ElementRef, inject, signal, viewChild, OnDestroy, effect } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { amzLogisticSites } from '../../data/amz-logistics-sites';
import type { AmzLogisticSite } from '../../interfaces/amz-logistics-site';
import { MapService } from '../../services/map-service';
import { ViewControlService } from '../../services/view-control-service';
import { SiteInteractionService } from '../../services/site-interaction-service';


@Component({
  selector: 'app-buildings-pages',
  imports: [],
  templateUrl: './buildings-page.html',

})
export class BuildingsPage implements AfterViewInit, OnDestroy {

  private readonly mapService = inject(MapService);
  private readonly viewControlService = inject(ViewControlService);
  public siteInteractionService = inject(SiteInteractionService);

  public divElement = viewChild<ElementRef<HTMLDivElement>>('map');

  resizeEffect = effect((cleanup) => {
    const isVisible = this.viewControlService.isVisible();
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      this.mapService.getMap()?.resize();
    }, 350);

    cleanup(() => clearTimeout(timeout));
  });

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const map = this.mapService.initializeMap(element);
    this.addAmzBuildingMarkers(map);

  }

  ngOnDestroy(): void {
    this.mapService.getMap()?.remove();
  }


  addAmzBuildingMarkers(map: mapboxgl.Map) {

    amzLogisticSites.forEach(site => {

      const elLabel = document.createElement('div');
      elLabel.innerHTML = `<p class="text-white text-xs -mt-16 bg-black/60 px-2 py-1 rounded">${site.type}</p>`;

      new mapboxgl.Marker(elLabel)
        .setLngLat(site.coords)
        .addTo(map);

      const marker = new mapboxgl.Marker({
        color: '#FF9900',

      })
        .setLngLat(site.coords)
        .addTo(map);

      this.mapService.addMarker({ id: site.id, marker, site });

      const el = marker.getElement();

      el.addEventListener('click', () => {
        this.siteInteractionService.selectSiteWithDelay(site);
      })
    });
  }




}


