import { Component, effect, inject, signal } from '@angular/core';
import { ViewControlService, ViewType } from '../../services/view-control-service';
import { IconClose } from "../../components/icons/icon-close";
import { LinkPanel } from '../../components/link-panel/link-panel';
import { IconColorFacebook } from "../../components/icons/icon-color-facebook";
import { IconColorGmaps } from "../../components/icons/icon-color-gmaps";
import { IconAmazon } from "../../components/icons/icon-amazon";

@Component({
  selector: 'view-about',
  imports: [IconClose, LinkPanel, IconColorFacebook, IconColorGmaps, IconAmazon],
  templateUrl: './view-about.html',
})
export class ViewAbout {
  public viewControlService = inject(ViewControlService);
  public viewType = ViewType.about;
  public readonly ViewType = ViewType;


  public close() {
    this.viewControlService.hideView();
  }


}
