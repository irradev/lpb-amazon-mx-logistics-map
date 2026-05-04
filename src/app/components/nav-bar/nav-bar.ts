import { Component, inject } from '@angular/core';
import { IconMapLocation } from "../icons/icon-map-location";
import { IconFavorites } from "../icons/icon-favorites";
import { IconInfo } from "../icons/icon-info";
import { TabButton } from '../tab-button/tab-button';
import { MapService } from '../../services/map-service';
import { ViewControlService, ViewType } from '../../services/view-control-service';
import { SiteInteractionService } from "../../services/site-interaction-service";

@Component({
  selector: 'nav-bar',
  imports: [TabButton, IconMapLocation, IconFavorites, IconInfo],
  templateUrl: './nav-bar.html',
})
export class NavBar {
  private readonly mapService = inject(MapService);
  public viewControlService = inject(ViewControlService);
  private readonly siteInteractionService = inject(SiteInteractionService);

  public onTabMap() {

    if (this.siteInteractionService.getSiteInfo()) {
      this.siteInteractionService.setSiteInfo(null);
      this.viewControlService.hideView();
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
    this.viewControlService.showView(ViewType.favorites);
  }

  public onTabAbout() {
    this.viewControlService.showView(ViewType.about);
  }
}
