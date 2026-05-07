import { Component, inject } from "@angular/core";
import { IconClose } from "../../../components/icons/icon-close";
import { ViewControlService } from "../../../services/view-control-service";
import { IconLinkedinColor } from "../../../components/icons/icon-color-linkedin";

@Component({
    selector: 'static-header',
    imports: [IconClose, IconLinkedinColor],
    template: `
   <div
            class="flex justify-between items-center w-full h-16 rounded-t-2xl px-4 md:px-8 border-b border-gray-300">
            <h1 class="text-lg sm:text-xl font-bold text-amz-primary">Acerca de esta aplicación</h1>
            <div class="flex items-center gap-3">
                <a class="btn btn-sm btn-circle btn-ghost hover:bg-transparent hover:scale-115 hover:border-none transition-transform duration-200" target="_blank" [href]="linkedinProfile.href" [title]="linkedinProfile.title">
                    <icon-linkedin-color [size]="32" />
                </a>
                <button class="btn btn-sm btn-circle btn-ghost hover:bg-transparent hover:scale-115 hover:border-none transition-transform duration-200" (click)="close()" title="Cerrar">
                    <icon-close [size]="32" />
                </button>
            </div>
    </div>
    `
})
export class StaticHeader {

    public viewControlService = inject(ViewControlService);
    public linkedinProfile = {
        title: 'Visita mi perfil en LinkedIn',
        href: 'https://www.linkedin.com/in/irradev/'
    }

    public close() {
        this.viewControlService.hideView();
    }
}