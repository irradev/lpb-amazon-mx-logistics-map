import { Component, effect, inject, signal } from '@angular/core';
import { ViewControlService, ViewType } from '../../services/view-control-service';
import { IconChevronDown } from "../../components/icons/icon-chevron-down";
import { MiniMap } from '../../components/mini-map/mini-map';
import { AmzLogisticSite } from '../../interfaces/amz-logistics-site';
import { StorageService } from '../../services/storage-service';
import { FAVORITES_STORAGE } from '../../constants/storage-keys';
import { IconLocation } from "../../components/icons/icon-location";
import { SiteInteractionService } from '../../services/site-interaction-service';

@Component({
  selector: 'view-favorites',
  imports: [IconChevronDown, MiniMap, IconLocation],
  templateUrl: './view-favorites.html',
})
export class ViewFavorites {
  public viewControlService = inject(ViewControlService);
  public storageService = inject(StorageService);
  public siteInteractionService = inject(SiteInteractionService);

  public readonly ViewType = ViewType;
  public isVisible = signal<boolean>(false);

  public favorites = signal<AmzLogisticSite[]>([]);

  viewDelayEffect = effect(() => {
    if (this.viewControlService.viewType() === ViewType.favorites) {
      setTimeout(() => {
        this.isVisible.set(true);
        this.favorites.set(this.storageService.get<AmzLogisticSite[]>(FAVORITES_STORAGE) || []);
      }, 300);
    } else {
      this.isVisible.set(false);
    }
  })

  public closeInfo() {
    this.viewControlService.hideView();
  }

  public selectFavorite(site: AmzLogisticSite) {
    this.siteInteractionService.selectSiteWithDelay(site);
    this.viewControlService.showView(ViewType.location);
  }


}
