import { Component, computed, effect, inject, input, signal, } from '@angular/core';
import { IconChevronDown } from '../../components/icons/icon-chevron-down';
import { ViewControlService } from '../../services/view-control-service';
import { MapService } from '../../services/map-service';
import { IconFavoritesBtn } from '../../components/icons/icon-favorites-btn';
import { IconLocation } from '../../components/icons/icon-location';
import { IconRoute } from '../../components/icons/icon-route';
import { SiteInteractionService } from '../../services/site-interaction-service';
import { IconChevronRight } from '../../components/icons/icon-chevron-right';
import { IconChevronLeft } from '../../components/icons/icon-chevron-left';
import type { MapMarker } from '../../interfaces/marker';
import type { AmzLogisticSite } from '../../interfaces/amz-logistics-site';
import { StorageService } from '../../services/storage-service';
import { FAVORITES_STORAGE } from '../../constants/storage-keys';
import { FavoritesService } from '../../services/favorites-service';

@Component({
  selector: 'view-site-info',
  imports: [IconChevronDown, IconFavoritesBtn, IconLocation, IconRoute, IconChevronRight, IconChevronLeft],
  templateUrl: './view-site-info.html',
})
export class ViewSiteInfo {

  public viewControlService = inject(ViewControlService);
  private mapService = inject(MapService);
  public siteInteractionService = inject(SiteInteractionService);
  private storageService = inject(StorageService);
  private favoritesService = inject(FavoritesService);

  public prevMarker = signal<MapMarker | null>(null);
  public nextMarker = signal<MapMarker | null>(null);

  public site = input<AmzLogisticSite | null>(null);
  public isVisible = input<boolean>(false);

  public isSiteFavorite = computed(() => {
    const site = this.site();
    if (!site) return false;
    return this.favoritesService.favorites().some(f => f.id === site.id);
  });


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
    this.viewControlService.hideView();
    this.siteInteractionService.setSiteInfo(null);
    setTimeout(() => {
      this.mapService.resetMapPosition();
      this.mapService.getMap()?.resize();
    }, 520);
  }

  public addToFavorites() {
    this.favoritesService.add(this.site()!);
  }

  public removeFromFavorites() {
    this.favoritesService.remove(this.site()!);
  }


}
