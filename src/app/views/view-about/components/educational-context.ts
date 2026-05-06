import { Component } from "@angular/core";
import { IconLinkExternal } from "../../../components/icons/icon-link-external";

@Component({
    selector: 'educational-context',
    imports: [IconLinkExternal],
    styles: [
        `:host {
            @apply w-full;
        }`
    ],
    template: `
    <section class="w-full">
        <h2 class="section-title mb-4">Contexto educativo</h2>
        <div class="flex flex-col gap-3 bg-gray-200 border-2 border-gray-300 rounded-lg p-6">
            <p class="text-sm md:text-base text-gray-500/85 font-medium italic">
                Este proyecto fue desarrollado como parte de la formación de <strong
                    class="text-amz-tertiary">Angular
                    Moderno</strong> en:
            </p>
            <div class="flex flex-col gap-2">
                <a [href]="school.href" target="_blank"
                    class="text-purple-900 font-bold cursor-pointer hover:underline inline-flex items-center gap-2 tracking-wider">
                    {{ school.name }}
                    <icon-link-external [size]="16" />
                </a>
                <a [href]="course.href" target="_blank"
                    class="text-gray-700 cursor-pointer inline-flex items-center gap-2 border border-gray-300 px-4 py-2 bg-gray-100 rounded-lg hover:border-amz-tertiary hover:bg-amz-tertiary/10 hover:text-amz-tertiary rounded transition-colors duration-200 ">
                    {{ course.name }}
                    <icon-link-external [size]="16" />
                </a>
            </div>
        </div>

    </section>
    `
})
export class EducationalContext {
    public readonly school = {
        href: 'https://cursos.devtalles.com/',
        name: 'Devtalles'
    }

    public readonly course = {
        href: 'https://cursos.devtalles.com/courses/angular-moderno',
        name: 'Angular: De cero a experto'
    }
}