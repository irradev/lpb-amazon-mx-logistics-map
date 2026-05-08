import { Component, input } from '@angular/core';
import { NavControls } from "./components/nav-controls";
import { SiteImage } from "./components/site-image";
import { HeaderInfo } from "./components/header-info";
import { BottomActions } from "./components/bottom-actions";
import type { AmzLogisticSite } from "../../interfaces/amz-logistics-site";

@Component({
  selector: 'view-site-info',
  imports: [NavControls, HeaderInfo, BottomActions, SiteImage],
  templateUrl: './view-site-info.html',
})
export class ViewSiteInfo {
  public site = input.required<AmzLogisticSite>();
}
