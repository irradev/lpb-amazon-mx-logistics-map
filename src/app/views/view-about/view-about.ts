import { Component, inject } from '@angular/core';
import { ViewControlService, ViewType } from '../../services/view-control-service';
import { AuthorProfile } from "./components/author-profile";
import { SourceLinks } from "./components/source-links";
import { EducationalContext } from "./components/educational-context";
import { LegalInfo } from "./components/legal-info";
import { StaticFooter } from "./components/static-footer";
import { StaticHeader } from "./components/static-header";
import { Buymeacoffe } from "./components/buymeacoffe";

@Component({
  selector: 'view-about',
  imports: [AuthorProfile, SourceLinks, EducationalContext, LegalInfo, StaticFooter, StaticHeader, Buymeacoffe],
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
