import { Component, inject } from "@angular/core";
import { IconClose } from "../../../components/icons/icon-close";
import { ViewControlService } from "../../../services/view-control-service";
import { IconCoffe } from "../../../components/icons/icon-coffe";

@Component({
    selector: 'static-header',
    imports: [IconClose, IconCoffe],
    template: `
   <div
            class="flex justify-between items-center w-full h-16 rounded-t-2xl px-4 md:px-8 border-b border-gray-300">
            <h1 class="text-lg sm:text-xl font-bold text-amz-primary">Acerca de esta aplicación</h1>
            <div class="flex items-center justify-center gap-4">
            <button class="btn btn-sm btn-circle btn-ghost hover:bg-transparent hover:border-none" title="Invitar un café">
                    <icon-coffe [size]="31" />
                </button>
                <button class="btn btn-sm btn-circle btn-ghost" (click)="close()" title="Cerrar">
                    <icon-close [size]="32" />
                </button>
            </div>
        </div>
    `
})
export class StaticHeader {

    public viewControlService = inject(ViewControlService);

    public close() {
        this.viewControlService.hideView();
    }
}