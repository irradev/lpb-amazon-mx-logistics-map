import { Injectable, signal } from '@angular/core';
import { AmzLogisticSite } from '../interfaces/amz-logistics-site';

@Injectable({
  providedIn: 'root'
})
export class SiteInfoService {

  private visible = signal(false);

  private siteInfo = signal<AmzLogisticSite | null>(null);

  public getSiteInfo() {
    return this.siteInfo();
  }

  public isVisible() {
    return this.visible();
  }

  public setSiteInfo(site: AmzLogisticSite | null) {
    this.siteInfo.set(site);
  }

  public hideInfo() {
    this.visible.set(false);
  }

  public showInfo() {
    this.visible.set(true);
  }
}
