import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { DcLayoutModule } from '@avine/ng-deco/layout';
import { DcMenuItemFlat, DcMenuModule } from '@avine/ng-deco/menu';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterOutlet,
    DcLayoutModule,
    DcMenuModule,
  ],
  templateUrl: './app.html',
})
export class App {
  mainMenuItems: DcMenuItemFlat[] = [
    {
      label: 'Home',
      icon: 'home',
      routerLink: ['/'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Material',
      icon: 'settings',
      routerLink: ['/material'],
    },
  ];
}
