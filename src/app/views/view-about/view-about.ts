import { Component, effect, inject, signal } from '@angular/core';
import { ViewControlService, ViewType } from '../../services/view-control-service';
import { IconClose } from "../../components/icons/icon-close";
import { AuthorProfile } from "./components/author-profile";
import { SourceLinks } from "./components/source-links";
import { EducationalContext } from "./components/educational-context";
import { LegalInfo } from "./components/legal-info";

@Component({
  selector: 'view-about',
  imports: [IconClose, AuthorProfile, SourceLinks, EducationalContext, LegalInfo],
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
