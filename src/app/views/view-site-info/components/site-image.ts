import { Component, input } from "@angular/core";

@Component({
    selector: 'site-image',
    imports: [],
    template: `
        <div class="w-full h-full flex items-center justify-center">
            <img class="aspect-video w-full h-[220px] sm:h-full object-cover rounded-2xl" [src]="siteImage()"
                [alt]="siteName()">
        </div>
    `,
    standalone: true,
})
export class SiteImage {
    public siteImage = input<string>();
    public siteName = input<string>();
}