import { Component, input } from "@angular/core";

@Component({
    selector: 'icon-chevron-down',
    template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size()" [attr.height]="size()" viewBox="0 0 16 16" fill="#1C274C">
    <path d="M8 10.18 2.39 4.52l-.89.87 5.59 5.71a1.18 1.18 0 0 0 .86.39 1.13 1.13 0 0 0 .85-.39l5.7-5.7-.88-.89z"/></svg>`

})
export class IconChevronDown {
    public size = input(24);
}