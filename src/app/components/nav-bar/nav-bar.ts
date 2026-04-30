import { Component } from '@angular/core';
import { IconMapLocation } from "../icons/icon-map-location";
import { IconFavorites } from "../icons/icon-favorites";
import { IconInfo } from "../icons/icon-info";

@Component({
  selector: 'nav-bar',
  imports: [IconMapLocation, IconFavorites, IconInfo],
  templateUrl: './nav-bar.html',
})
export class NavBar { }
