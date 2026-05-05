import { Component, input } from '@angular/core';
import { IconLinkExternal } from '../icons/icon-link-external';

@Component({
  selector: 'link-panel',
  imports: [IconLinkExternal],
  templateUrl: './link-panel.html',
})
export class LinkPanel {
  public title = input.required<string>();
  public href = input.required<string>();
}
