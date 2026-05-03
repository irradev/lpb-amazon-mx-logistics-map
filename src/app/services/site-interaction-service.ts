import { inject, Injectable, signal } from "@angular/core";
import { AmzLogisticSite } from "../interfaces/amz-logistics-site";
import { ViewControlService, ViewType } from "./view-control-service";
import { MapService } from "./map-service";


@Injectable({
    providedIn: 'root'
})
export class SiteInteractionService {

    private readonly viewControlService = inject(ViewControlService);
    private readonly mapService = inject(MapService);

    private siteInfo = signal<AmzLogisticSite | null>(null);

    public getSiteInfo() {
        return this.siteInfo();
    }

    public setSiteInfo(site: AmzLogisticSite | null) {
        this.siteInfo.set(site);
    }

    public selectSite(site: AmzLogisticSite) {
        this.setSiteInfo(site);
        this.viewControlService.showView(ViewType.location);
        this.mapService.flyTo(site.coords, 15);
    }

    public selectSiteWithDelay(site: AmzLogisticSite, delay = 370) {
        this.setSiteInfo(site);
        this.viewControlService.showView(ViewType.location);
        setTimeout(() => {
            this.mapService.flyTo(site.coords, 15);
        }, delay);
    }
}