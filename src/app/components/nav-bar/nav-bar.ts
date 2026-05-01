import { Component, inject } from '@angular/core';
import { IconMapLocation } from "../icons/icon-map-location";
import { IconFavorites } from "../icons/icon-favorites";
import { IconInfo } from "../icons/icon-info";
import { TabButton } from '../tab-button/tab-button';
import { MapService } from '../../services/map-service';
import { SiteInfoService } from '../../services/site-info-service';

@Component({
  selector: 'nav-bar',
  imports: [TabButton, IconMapLocation, IconFavorites, IconInfo],
  templateUrl: './nav-bar.html',
})
export class NavBar {
  private readonly mapService = inject(MapService);
  public siteInfoService = inject(SiteInfoService);

  public onTabMap() {

    if (this.siteInfoService.getSiteInfo()) {
      this.siteInfoService.setSiteInfo(null);
      this.siteInfoService.hideInfo();
      this.resetMapWIthDelay(520);
    } else {
      this.resetMapWIthDelay(0);
    }
  }

  private resetMapWIthDelay(delay: number) {
    setTimeout(() => {
      this.mapService.resetMapPosition();
      this.mapService.getMap()?.resize();
    }, delay);
  }

  public onTabFavorites() {

  }

  public onTabInfo() {

  }
}
