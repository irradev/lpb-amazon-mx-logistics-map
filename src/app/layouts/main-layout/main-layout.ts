import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { ViewControlService } from '../../services/view-control-service';
import { ViewSiteInfo } from "../../views/view-site-info/view-site-info";
import { SiteInteractionService } from '../../services/site-interaction-service';
import { ViewType } from '../../services/view-control-service';
import { ViewFavorites } from '../../views/view-favorites/view-favorites';
import { ViewAbout } from "../../views/view-about/view-about";

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, NavBar, ViewSiteInfo, ViewFavorites, ViewAbout],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  public viewControlService = inject(ViewControlService);
  public siteInteractionService = inject(SiteInteractionService);
  public readonly ViewType = ViewType;
}
