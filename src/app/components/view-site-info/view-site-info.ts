import { Component, inject, input, } from '@angular/core';
import type { AmzLogisticSite } from '../../interfaces/amz-logistics-site';
import { IconChevronDown } from '../icons/icon-chevron-down';
import { IconLeftArrow } from '../icons/icon-arrow-left';
import { IconRightArrow } from '../icons/icon-arrow-right';
import { SiteInfoService } from '../../services/site-info-service';
import { MapService } from '../../services/map-service';
import { IconFavoritesBtn } from '../icons/icon-favorites-btn';
import { IconLocation } from '../icons/icon-location';
import { IconRoute } from '../icons/icon-route';

@Component({
  selector: 'view-site-info',
  imports: [IconChevronDown, IconLeftArrow, IconRightArrow, IconFavoritesBtn, IconLocation, IconRoute],
  templateUrl: './view-site-info.html',
})
export class ViewSiteInfo {

  public siteInfoService = inject(SiteInfoService);
  private mapService = inject(MapService);

  public site = input<AmzLogisticSite | null>(null);
  public isVisible = input<boolean>(false);

  public closeInfo() {
    this.siteInfoService.hideInfo();
    this.siteInfoService.setSiteInfo(null);
    setTimeout(() => {
      this.mapService.resetMapPosition();
      this.mapService.getMap()?.resize();
    }, 520);
  }





}
