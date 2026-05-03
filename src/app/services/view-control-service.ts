import { Injectable, signal } from '@angular/core';

export enum ViewType {
  location = 'location',
  favorites = 'favorites',
  about = 'about'
}

@Injectable({
  providedIn: 'root'
})
export class ViewControlService {

  public viewType = signal<ViewType | null>(null);

  public isVisible() {
    return this.viewType() !== null;
  }


  public hideView() {
    this.viewType.set(null);
  }

  public showView(viewType: ViewType) {
    this.viewType.set(viewType);
  }
}
