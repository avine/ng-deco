import { NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  Component,
  computed,
  inject,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutConfigService } from './layout-config-service';
import { LayoutRegionPipe } from './layout-region-pipe';
import { LayoutSideService } from './layout-side-service';

@Component({
  selector: 'dc-layout',
  host: {
    class: 'dc-layout',
    '[style]': 'computedStyle()',
  },
  imports: [
    NgTemplateOutlet,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutRegionPipe,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Layout {
  protected configService = inject(LayoutConfigService);

  protected sideService = inject(LayoutSideService);

  private drawerContainer = viewChild(MatDrawerContainer);

  protected computedStyle = computed(() => {
    const { sidenavWidth, sidebarWidth, panelLeftWidth, panelRightWidth } =
      this.configService.config();
    return [
      `--dc-layout-sidenav-width: ${sidenavWidth}`,
      `--dc-layout-sidebar-width: ${sidebarWidth}`,
      `--dc-layout-panel-left-width: ${panelLeftWidth}`,
      `--dc-layout-panel-right-width: ${panelRightWidth}`,
    ].join('; ');
  });

  constructor() {
    afterRenderEffect(() => {
      this.configService.config();

      this.drawerContainer()?.updateContentMargins(); // FIXME: Faire ça seulement si les sides ont changé dans la config...
    });

    // TODO: sur mobile, n'avoir qu'un seul side ouvert à la fois...
  }
}
