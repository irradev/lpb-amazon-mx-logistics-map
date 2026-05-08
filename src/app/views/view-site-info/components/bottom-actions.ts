import { Component, input } from "@angular/core";
import { IconRoute } from "../../../components/icons/icon-route";
import { AmzLogisticSite } from "../../../interfaces/amz-logistics-site";

@Component({
    selector: 'bottom-actions',
    imports: [IconRoute],
    template: `
 <div class="flex flex-col gap-2 pt-2 pb-2">
    <a href="https://trabaja.amazon.com.mx/"
        class="btn text-amz-primary bg-amz-secondary font-bold hover:bg-amz-secondary hover:brightness-95"
        target="_blank" rel="noopener noreferrer">
        Explorar vacantes
    </a>
    <a [href]="site().googleMapsUrl" class="btn text-amz-tertiary hover:bg-gray-500/20" target="_blank"
        rel="noopener noreferrer">
        <icon-route />
        Ver en Google Maps
    </a>
</div>
 `

})
export class BottomActions {
    public site = input.required<AmzLogisticSite>();
}