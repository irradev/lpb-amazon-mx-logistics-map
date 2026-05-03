import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewControlService {

  private visible = signal(false);

  public isVisible() {
    return this.visible();
  }


  public hideInfo() {
    this.visible.set(false);
  }

  public showInfo() {
    this.visible.set(true);
  }
}
