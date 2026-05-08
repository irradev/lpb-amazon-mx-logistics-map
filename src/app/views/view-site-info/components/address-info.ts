import { Component, input } from "@angular/core";
import { AmzLogisticSite } from "../../../interfaces/amz-logistics-site";
import { IconLocation } from "../../../components/icons/icon-location";

@Component({
    selector: 'address-info',
    imports: [IconLocation],
    template: `
    <div class="flex items-center gap-1 text-gray-500 sticky top-14 bg-amz-neutral sm:static">
        <icon-location [size]="24" />
        <p class="text-sm sm:text-base">{{ site().address.municipality }}, {{site().address.state }}, {{ site().address.country }}</p>
    </div>
`
})
export class AddressInfo {

    public site = input.required<AmzLogisticSite>();
}