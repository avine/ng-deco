import { effect, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { DcBreakpointObserver } from '@avine/ng-deco/breakpoint';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DcMobileMenuSlotService {
  readonly isMobile = inject(DcBreakpointObserver).matches(['XSmall']);

  readonly opened = signal(false);

  constructor() {
    this.closeOnNavigation();
    this.hideOnDesktop();
  }

  private closeOnNavigation() {
    inject(Router)
      .events.pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd && this.opened()),
      )
      .subscribe(() => this.toggle(false));
  }

  private hideOnDesktop() {
    effect(() => this.isMobile() || this.toggle(false));
  }

  toggle(opened?: boolean) {
    this.opened.update((_opened) => opened ?? !_opened);
  }
}
