import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../../components/nav-bar/nav-bar';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, NavBar],
  templateUrl: './main-layout.html',
})
export class MainLayout { }
