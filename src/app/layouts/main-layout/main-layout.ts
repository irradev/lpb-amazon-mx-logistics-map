import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { SiteInfoService } from '../../services/site-info-service';
import { ViewSiteInfo } from "../../components/view-site-info/view-site-info";

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, NavBar, ViewSiteInfo],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  public siteInfoService = inject(SiteInfoService);
}
