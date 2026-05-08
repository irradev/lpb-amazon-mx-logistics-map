

import { Component, input } from "@angular/core";
import { AmzLogisticSite } from "../../../interfaces/amz-logistics-site";
import { FavoriteButton } from "./favorite-button";
import { AddressInfo } from "./address-info";

@Component({
    selector: 'header-info',
    imports: [FavoriteButton, AddressInfo],
    template: `
  <div class="flex justify-between items-center sticky -top-4 sm:top-0 bg-amz-neutral pt-4 sm:pt-0 ">

    <div class="flex flex-col w-full gap-1 mb-2">
        <p class="uppercase text-xs sm:text-sm font-bold text-amz-tertiary tracking-[.09rem]">
            {{ site()?.type
            }}</p>
        <h2 class="text-xl sm:text-2xl font-bold text-amz-primary">{{ site()?.name }}</h2>
    </div>

    <favorite-button [site]="site()!" />

  </div>

  <address-info [site]="site()!" />

  <div class="divider mt-0 pt-2 mb-1 pb-3 sticky top-20 sm:top-16 bg-amz-neutral"></div>
    `
})
export class HeaderInfo {

    public site = input<AmzLogisticSite>();

}