import { AfterViewInit, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { MapService } from '../../services/map-service';

@Component({
  selector: 'mini-map',
  imports: [],
  templateUrl: './mini-map.html',
})
export class MiniMap implements AfterViewInit {

  private mapService = inject(MapService);

  public divElement = viewChild<ElementRef<HTMLElement>>('map');
  public coordinates = input.required<{ lng: number, lat: number }>();
  public zoom = input(14);

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) return;

    await new Promise(resolve => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement as HTMLDivElement;

    this.mapService.createMiniMap(element, this.coordinates(), this.zoom());
  }
}
