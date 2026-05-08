import { Component, computed, effect, inject, input, OnInit, signal } from "@angular/core";
import { IconChevronLeft } from "../../../components/icons/icon-chevron-left";
import { IconChevronRight } from "../../../components/icons/icon-chevron-right";
import { ViewControlService, ViewType } from "../../../services/view-control-service";
import { SiteInteractionService } from "../../../services/site-interaction-service";
import { StorageService } from "../../../services/storage-service";
import { MapService } from "../../../services/map-service";
import { FavoritesService } from "../../../services/favorites-service";
import { MapMarker } from "../../../interfaces/marker";
import { IconChevronDown } from "../../../components/icons/icon-chevron-down";
import { NgClass } from "@angular/common";

@Component({
    selector: 'nav-controls',
    imports: [IconChevronLeft, IconChevronRight, IconChevronDown, NgClass],
    template: ` 
   <button class="btn glass min-w-40 rounded-full absolute -top-6 left-1/2 -translate-x-1/2 hover:bg-white/40 z-10"
        [class]="{
            '-top-6': isVisible(),
            'top-5': !isVisible()
        }" (click)="closeInfo()">
        <icon-chevron-down [size]="32" />
        CERRAR
    </button>

    <div class="tooltip tooltip-right absolute left-2 z-10" [ngClass]="{
            'bottom-4 sm:top-[calc(50%)]': isVisible(),
            'top-1/2': !isVisible()
        }" data-tip="Anterior">
        <button class="btn btn-circle glass  hover:bg-white/40 z-10" (click)="goToPrevMarker()">
            <icon-chevron-left [size]="20" />
        </button>
    </div>

    <div class="tooltip tooltip-left absolute right-2 z-10" [ngClass]="{
            'bottom-4 sm:top-[calc(50%)]': isVisible(),
            'top-1/2': !isVisible()
        }" data-tip="Siguiente">
        <button class="btn btn-circle glass  hover:bg-white/40 z-10" (click)="goToNextMarker()">
            <icon-chevron-right [size]="20" />
        </button>
    </div>
    `,
})
export class NavControls implements OnInit {
    public viewControlService = inject(ViewControlService);
    private mapService = inject(MapService);
    public siteInteractionService = inject(SiteInteractionService);

    public siteId = input<string | null>(null);
    public prevMarker = signal<MapMarker | null>(null);
    public nextMarker = signal<MapMarker | null>(null);

    public isVisible = computed(() => this.viewControlService.viewType() === ViewType.location);

    ngOnInit() {
        if (!this.siteId()) return;
        const prevAndNextMarkers = this.mapService.getPrevAndNextMarker(this.siteId()!);
        this.prevMarker.set(prevAndNextMarkers.prevMarker);
        this.nextMarker.set(prevAndNextMarkers.nextMarker);
    }

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


}