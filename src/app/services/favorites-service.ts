import { Injectable, signal, inject } from "@angular/core";
import { StorageService } from "./storage-service";
import { AmzLogisticSite } from "../interfaces/amz-logistics-site";
import { FAVORITES_STORAGE } from "../constants/storage-keys";

@Injectable({ providedIn: 'root' })
export class FavoritesService {

    private storage = inject(StorageService);

    private _favorites = signal<AmzLogisticSite[]>(
        this.storage.get<AmzLogisticSite[]>(FAVORITES_STORAGE) || []
    );

    public favorites = this._favorites.asReadonly();

    public add(site: AmzLogisticSite) {
        if (this.favorites().find(f => f.id === site.id)) return;

        const updated = [...this._favorites(), site];
        this._favorites.set(updated);
        this.storage.set(FAVORITES_STORAGE, updated);
    }

    public remove(site: AmzLogisticSite) {
        const updated = this._favorites().filter(f => f.id !== site.id);
        this._favorites.set(updated);
        this.storage.set(FAVORITES_STORAGE, updated);
    }

    public isFavorite(id: string) {
        return this.favorites().some(f => f.id === id);
    }
}