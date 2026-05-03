import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { ViewControlService } from '../../services/view-control-service';
import { ViewSiteInfo } from "../../views/view-site-info/view-site-info";
import { SiteInteractionService } from '../../services/site-interaction-service';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, NavBar, ViewSiteInfo],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  public viewControlService = inject(ViewControlService);
  public siteInteractionService = inject(SiteInteractionService);
}
