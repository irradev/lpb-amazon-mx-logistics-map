import { Component } from "@angular/core";


@Component({
    selector: 'legal-info',
    imports: [],
    template: `
    <section class="  flex flex-col justify-center gap-4 mt-4 text-gray-500 text-sm md:text-base tracking-wider bg-amz-neutral px-4 py-2 text-justify">
        <h2 class="section-title">Aviso legal</h2>
        <p>
            La información presentada en esta aplicación ha sido recopilada a partir de fuentes públicas disponibles en internet, incluyendo plataformas como Amazon Jobs, Google Maps y redes sociales oficiales de Amazon México.
        </p>
        <p>
            Este proyecto es independiente y no tiene ninguna afiliación, relación ni respaldo oficial por parte de Amazon.
        </p>
        <p>
            Algunas descripciones de los sitios han sido generadas o adaptadas con ayuda de inteligencia artificial, tomando como referencia información pública como vacantes y descripciones de puestos.
        </p>

        <p>
            La información mostrada puede no ser completamente precisa, actualizada o exhaustiva, por lo que debe considerarse únicamente con fines informativos y demostrativos.
        </p>
    </section>
    `,
    styles: [
        `:host {
            @apply w-full max-w-[60ch]  mx-auto;
        }
        @media (min-width: 768px) {
            :host {
                @apply col-span-2;
            }
        }
        `
    ]
})
export class LegalInfo { }