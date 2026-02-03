import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { effect, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DcLayoutMobileMenuService {
  readonly isMobile = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.XSmall])
      .pipe(map(({ matches }) => matches)),
  );

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
