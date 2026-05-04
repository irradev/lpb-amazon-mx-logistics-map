import { Component, effect, inject, signal } from '@angular/core';
import { ViewControlService, ViewType } from '../../services/view-control-service';
import { IconClose } from "../../components/icons/icon-close";

@Component({
  selector: 'view-about',
  imports: [IconClose],
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
