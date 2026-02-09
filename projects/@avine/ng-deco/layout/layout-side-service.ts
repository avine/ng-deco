import { computed, effect, inject, Injectable, signal, untracked } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { DcBreakpointObserver } from '@avine/ng-deco/breakpoint';
import { filter } from 'rxjs';
import { DcLayoutConfigService } from './layout-config-service';
import { DcLayoutSlotService } from './layout-slot-service';

@Injectable({
  providedIn: 'root',
})
export class DcLayoutSideService {
  private config = inject(DcLayoutConfigService);

  private slotService = inject(DcLayoutSlotService);

  readonly isMobile = inject(DcBreakpointObserver).matches(['XSmall']);

  readonly sidenavOpened = signal(false);

  readonly sidebarOpened = signal(false);

  readonly sidenavMode = computed((): MatDrawerMode => (this.isMobile() ? 'over' : 'side'));

  readonly sidebarMode = computed(
    (): MatDrawerMode => (this.isMobile() ? 'push' : this.config.config().sidebarDesktopMode),
  );

  readonly hasBackdrop = computed(() => this.isMobile() && !this.sidebarOpened());

  constructor() {
    this.closeSidenavOnNavigation();
    this.closeEmptySide();
    this.preventSideConflict();
  }

  private closeSidenavOnNavigation() {
    inject(Router)
      .events.pipe(
        takeUntilDestroyed(),
        filter(
          (event) =>
            event instanceof NavigationEnd && this.sidenavMode() === 'over' && this.sidenavOpened(),
        ),
      )
      .subscribe(() => this.toggleSidenav(false));
  }

  private closeEmptySide() {
    const sidenavItems = this.slotService.getItems('sidenav');
    const sidebarItems = this.slotService.getItems('sidebar');

    effect(() => sidenavItems().length || this.sidenavOpened.set(false));
    effect(() => sidebarItems().length || this.sidebarOpened.set(false));
  }

  private preventSideConflict() {
    effect(() => {
      if (this.isMobile() && this.sidenavOpened() && untracked(() => this.sidebarOpened())) {
        this.toggleSidebar(false);
      }
    });
  }

  toggleSidenav(opened?: boolean) {
    this.sidenavOpened.update((_opened) => opened ?? !_opened);
  }

  toggleSidebar(opened?: boolean) {
    this.sidebarOpened.update((_opened) => opened ?? !_opened);
  }
}
