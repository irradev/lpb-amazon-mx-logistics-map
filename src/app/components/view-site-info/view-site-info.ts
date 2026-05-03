import { Component, effect, inject, input, signal, } from '@angular/core';
import type { AmzLogisticSite } from '../../interfaces/amz-logistics-site';
import { IconChevronDown } from '../icons/icon-chevron-down';
import { IconLeftArrow } from '../icons/icon-arrow-left';
import { IconRightArrow } from '../icons/icon-arrow-right';
import { SiteInfoService } from '../../services/site-info-service';
import { MapService } from '../../services/map-service';
import { IconFavoritesBtn } from '../icons/icon-favorites-btn';
import { IconLocation } from '../icons/icon-location';
import { IconRoute } from '../icons/icon-route';
import { SiteInteractionService } from '../../services/site-interaction-service';
import type { MapMarker } from '../../interfaces/marker';
import { IconChevronRight } from '../icons/icon-chevron-right';
import { IconChevronLeft } from '../icons/icon-chevron-left';

@Component({
  selector: 'view-site-info',
  imports: [IconChevronDown, IconLeftArrow, IconRightArrow, IconFavoritesBtn, IconLocation, IconRoute, IconChevronRight, IconChevronLeft],
  templateUrl: './view-site-info.html',
})
export class ViewSiteInfo {

  public siteInfoService = inject(SiteInfoService);
  private mapService = inject(MapService);
  public siteInteractionService = inject(SiteInteractionService);
  public prevMarker = signal<MapMarker | null>(null);
  public nextMarker = signal<MapMarker | null>(null);

  public site = input<AmzLogisticSite | null>(null);
  public isVisible = input<boolean>(false);


  public siteSelected = effect(() => {

    const site = this.site();
    if (!site) return;

    const prevAndNextMarkers = this.mapService.getPrevAndNextMarker(site.id);
    this.prevMarker.set(prevAndNextMarkers.prevMarker);
    this.nextMarker.set(prevAndNextMarkers.nextMarker);
  });

  public goToPrevMarker() {
    const marker = this.prevMarker();
    if (!marker) return;
    this.siteInteractionService.selectSite(marker.site);
  }

  public goToNextMarker() {
    const marker = this.nextMarker();
    if (!marker) return;
    this.siteInteractionService.selectSite(marker.site);
  }

  public closeInfo() {
    this.siteInfoService.hideInfo();
    this.siteInfoService.setSiteInfo(null);
    setTimeout(() => {
      this.mapService.resetMapPosition();
      this.mapService.getMap()?.resize();
    }, 520);
  }





}
