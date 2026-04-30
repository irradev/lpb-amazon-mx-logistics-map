import { Component, signal } from '@angular/core';
import { MainLayout } from './layouts/main-layout/main-layout';

import '@fontsource-variable/inter/wght.css';

@Component({
  selector: 'app-root',
  imports: [MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lpb-amazon-mx-logistics');
}
