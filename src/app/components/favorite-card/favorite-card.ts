import { Component, input, output } from '@angular/core';
import { AmzLogisticSite } from '../../interfaces/amz-logistics-site';
import { MiniMap } from "../mini-map/mini-map";
import { IconLocation } from "../icons/icon-location";

@Component({
  selector: 'favorite-site-card',
  imports: [MiniMap, IconLocation],
  templateUrl: './favorite-card.html',
})
export class FavoriteCard {
  public site = input.required<AmzLogisticSite>();
  public selected = output<AmzLogisticSite>();

  public selectSite(site: AmzLogisticSite) {
    this.selected.emit(site);
  }
}
