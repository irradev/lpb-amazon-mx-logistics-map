import { Component, signal } from "@angular/core";
import { IconCoffe } from "../../../components/icons/icon-coffe";
import { IconLinkExternal } from "../../../components/icons/icon-link-external";
import { NgClass } from "@angular/common";


@Component({
    selector: 'buymeacoffe',
    imports: [IconCoffe, IconLinkExternal, NgClass],
    template: `
    <div class="flex items-center gap-1 sm:gap-2  ">
        <p class="text-gray-500 text-xs md:text-sm font-medium transition-all delay-700 duration-1500 italic text-center" [ngClass]="{
            'translate-x-2 opacity-0': !isShowBuyMeACoffee(),
            'translate-x-0 opacity-100': isShowBuyMeACoffee(),
        }">
            ¿Me invitas un café?
        </p>
        <div class=" overflow-hidden transition-all duration-1500 h-20 sm:h-12 flex items-center gap-2 bg-amz-neutral relative" [ngClass]="{
            'w-9': !isTooltipActive(),
            'w-[190px] sm:w-[335px] md:w-[385px]': isTooltipActive(),
        }" >
    
            <button class="btn btn-sm btn-circle btn-ghost hover:bg-transparent hover:border-none text-gray-400" title="¿Me invitas un café?" (click)="toggleTooltip()" [ngClass]="
            {
                'text-gray-400' : !isTooltipActive(),
                'text-gray-500' : isTooltipActive(),
            }">
                <icon-coffe [size]="31" />
            </button>
    
            <div class="flex flex-col sm:flex-row justify-start items-center gap-2 sm:gap-1 relative">
    
                <p class="min-w-[150px] max-w-[150px] md:min-w-[200px] md:max-w-[200px] text-gray-500 text-xs md:text-base font-medium transition-all duration-1500 italic" [ngClass]="{
                    'opacity-0': !isTooltipActive(),
                    'opacity-100': isTooltipActive(),
                }">
                    Hecho con código, mapas y mucho café ☕️
                </p>
    
                    <a
                        href="https://www.buymeacoffee.com/irradev"
                        target="_blank"
                        class="flex items-center justify-center gap-2 w-32 text-black text-xs font-bold ml-2 bg-amz-secondary text-center rounded-full px-3 py-2 text-nowrap transition-all duration-1800 ease-in-out"
                        [ngClass]="{
                            'opacity-0 translate-x-10 pointer-events-none': !isShowBuyMeACoffee(),
                            'opacity-100 translate-x-0': isShowBuyMeACoffee(),
                        }"
                    >
                        Buy me a coffee
    
                        <icon-link-external [size]="16" />
                    </a>
            </div>
    </div>

    </div>
    `
})
export class Buymeacoffe {
    public isTooltipActive = signal<boolean>(false);

    public isShowBuyMeACoffee = signal(false);

    private timeoutId?: ReturnType<typeof setTimeout>;

    public toggleTooltip() {
        const nextState = !this.isTooltipActive();

        this.isTooltipActive.set(nextState);

        if (nextState) {

            this.timeoutId = setTimeout(() => {
                this.isShowBuyMeACoffee.set(true);
            }, 1500);

        } else {

            clearTimeout(this.timeoutId);

            this.isShowBuyMeACoffee.set(false);
        }
    }
}