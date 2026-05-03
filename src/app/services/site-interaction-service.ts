import { inject, Injectable } from "@angular/core";
import { AmzLogisticSite } from "../interfaces/amz-logistics-site";
import { SiteInfoService } from "./site-info-service";
import { MapService } from "./map-service";


@Injectable({
    providedIn: 'root'
})
export class SiteInteractionService {

    private readonly siteInfoService = inject(SiteInfoService);
    private readonly mapService = inject(MapService);

    public selectSite(site: AmzLogisticSite) {
        this.siteInfoService.setSiteInfo(site);
        this.siteInfoService.showInfo();
        this.mapService.flyTo(site.coords, 15);
    }

    public selectSiteWithDelay(site: AmzLogisticSite, delay = 370) {
        this.siteInfoService.setSiteInfo(site);
        this.siteInfoService.showInfo();
        setTimeout(() => {
            this.mapService.flyTo(site.coords, 15);
        }, delay);
    }
}