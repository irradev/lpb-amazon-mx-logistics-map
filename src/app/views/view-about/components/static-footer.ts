import { Component } from "@angular/core";
import { IconLinkExternal } from "../../../components/icons/icon-link-external";


@Component({
    selector: 'static-footer',
    template: `
    <footer class="flex justify-between items-center px-4 md:px-8 py-4 bg-amz-primary">
        <p class="text-base sm:text-base md:text-xl font-semibold text-neutral-content tracking-wider">
            irradev
        </p>

        <div class="flex flex-col items-end gap-1">

        <a href="https://irra.dev" target="_blank" class="text-xs sm:text-sm md:text-base text-neutral-content font-medium flex items-center gap-1">
            Visita mi portafolio
            <icon-link-external [size]="16" />
        </a>

        <p class="text-[11px] md:text-xs text-neutral-content/70">
            Proyecto independiente creado con fines educativos.
        </p>
        </div>
    </footer>
    `,
    imports: [IconLinkExternal]
})
export class StaticFooter { }