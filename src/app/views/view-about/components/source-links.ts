import { Component } from "@angular/core";
import { NgComponentOutlet } from "@angular/common";
import { LinkPanel } from "../../../components/link-panel/link-panel";
import { IconColorFacebook } from "../../../components/icons/icon-color-facebook";
import { IconAmazon } from "../../../components/icons/icon-amazon";
import { IconColorGmaps } from "../../../components/icons/icon-color-gmaps";

@Component({
    selector: 'source-links',
    imports: [LinkPanel, NgComponentOutlet],
    styles: `
    :host {
        @apply w-full;
    }
    `,
    template: `
    <section>
        <h2 class="section-title mb-1">Fuentes de información</h2>
        <p class="text-xs md:text-base text-gray-500 italic">Encuentra información más actualizada en los
            sitios
            oficiales:</p>
        <div class="flex flex-col gap-3 mt-2">

            @for(source of sources; track source.title){
            <link-panel [title]="source.title" [href]="source.href">
                <ng-container *ngComponentOutlet="source.icon; inputs: {size: 24}" />
            </link-panel>
            }
        </div>
    </section>
    `

})
export class SourceLinks {

    public readonly sources = [
        {
            title: 'Empleos Amazon México',
            href: 'https://www.facebook.com/empleosamazonmexico',
            icon: IconColorFacebook,
        },
        {
            title: 'Amazon Jobs México',
            href: 'https://trabaja.amazon.com.mx/',
            icon: IconAmazon,
        },
        {
            title: 'Amazon Logistics (Google Maps)',
            href: 'https://www.google.com/maps/search/amazon+logistics/@25.9003539,-100.3433307,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D',
            icon: IconColorGmaps,
        },
    ];
}