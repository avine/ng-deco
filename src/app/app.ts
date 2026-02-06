import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { DcLayoutModule } from '@avine/ng-deco/layout';
import { DcMenuItem, DcMenuItemFlat, DcMenuModule } from '@avine/ng-deco/menu';

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

  sideMenuItems: DcMenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      routerLink: ['/'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Components',
      icon: 'widgets',
      children: [
        {
          label: 'Material',
          icon: 'settings',
          routerLink: ['/material'],
        },
        {
          label: 'Actions',
          icon: 'bolt',
          children: [
            {
              label: 'Run command',
              icon: 'terminal',
              command: () => console.log('Command executed'),
            },
          ],
        },
      ],
    },
    {
      label: 'Components2',
      icon: 'widgets',
      children: [
        {
          label: 'Material',
          icon: 'settings',
          routerLink: ['/material'],
        },
        {
          label: 'Actions',
          icon: 'bolt',
          children: [
            {
              label: 'Run command',
              icon: 'terminal',
              command: () => console.log('Command executed'),
            },
          ],
        },
      ],
    },
    {
      label: 'External',
      icon: 'open_in_new',
      href: 'https://github.com/avine/ng-deco',
      target: '_blank',
    },
  ];
}
