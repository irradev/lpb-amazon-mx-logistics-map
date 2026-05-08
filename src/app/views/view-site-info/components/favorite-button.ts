import { Component, computed, inject, input, output } from "@angular/core";
import { IconFavoritesBtn } from "../../../components/icons/icon-favorites-btn";
import { FavoritesService } from "../../../services/favorites-service";
import { AmzLogisticSite } from "../../../interfaces/amz-logistics-site";

@Component({
    selector: 'favorite-button',
    imports: [IconFavoritesBtn],
    template: `
    @if (isSiteFavorite()) {
        <div class="tooltip tooltip-left" data-tip="Eliminar de favoritos">
            <button class="btn btn-circle bg-white/90 hover:bg-black/10 hover:border-none shadow-sm"
                (click)="removeFromFavorites()">
                <icon-favorites-btn [filled]="true" />
            </button>
        </div>
        } @else {
        <div class="tooltip tooltip-left" data-tip="Añadir a favoritos">
            <button class="btn btn-circle bg-white/90 hover:bg-black/10 hover:border-none shadow-sm"
                (click)="addToFavorites()">
                <icon-favorites-btn [filled]="false" />
            </button>
        </div>
    }
    `
})
export class FavoriteButton {

    private favoritesService = inject(FavoritesService);
    public site = input.required<AmzLogisticSite>();
    public isSiteFavorite = computed(() => {
        const site = this.site();
        if (!site) return false;
        return this.favoritesService.favorites().some(f => f.id === site.id);
    });

    public addToFavorites() {
        this.favoritesService.add(this.site()!);
    }

    public removeFromFavorites() {
        this.favoritesService.remove(this.site()!);
    }
}