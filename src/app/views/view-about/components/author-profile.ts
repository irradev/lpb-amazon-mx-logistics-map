import { Component } from '@angular/core';

@Component({
  selector: 'author-profile',
  imports: [],
  template: `
  <section class="flex gap-4 pb-8 border-b border-gray-300">
      <div class="avatar">
          <div class="aspect-square w-32 md:w-36 rounded-2xl overflow-hidden border-2 border-amz-tertiary/50">
              <img [src]="profileImageUrl" />
          </div>
      </div>
      <div>
          <h2 class="section-title">Creador del proyecto</h2>
          <p class="text-base md:text-lg font-semibold text-amz-tertiary">{{ authorName }}</p>
          <p class="text-sm md:text-base text-gray-500">{{ authorRole }}</p>
          <p class="text-xs md:text-base text-gray-700 mt-2">{{ authorDescription }}</p>
      </div>
  </section>
  `,
})
export class AuthorProfile {
  public readonly profileImageUrl = 'assets/images/irradev_profile.webp';
  public readonly authorName = 'Tec. Israel Vázquez';
  public readonly authorRole = 'Frontend Engineer | 2026 | México';
  public readonly authorDescription = 'Desarrollador web apasionado por crear herramientas prácticas, optimizar procesos y convertir ideas en aplicaciones funcionales, con enfoque en la interactividad y la experiencia de usuario.';
}
