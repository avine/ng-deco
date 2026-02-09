import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, Signal, computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay } from 'rxjs';
import { DcBreakpointMap, DcBreakpointName } from './breakpoint-types';

@Injectable({
  providedIn: 'root',
})
export class DcBreakpointObserver {
  private breakpointMap$ = inject(BreakpointObserver)
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(
      takeUntilDestroyed(),
      map(({ breakpoints }): DcBreakpointMap => {
        return {
          XSmall: breakpoints[Breakpoints.XSmall],
          Small: breakpoints[Breakpoints.Small],
          Medium: breakpoints[Breakpoints.Medium],
          Large: breakpoints[Breakpoints.Large],
          XLarge: breakpoints[Breakpoints.XLarge],
        };
      }),
      shareReplay(1),
    );

  breakpointMap = toSignal(this.breakpointMap$);

  breakpoint = computed<DcBreakpointName | undefined>(() => {
    const breakpointMap = this.breakpointMap();
    if (breakpointMap?.XSmall) {
      return 'XSmall';
    }
    if (breakpointMap?.Small) {
      return 'Small';
    }
    if (breakpointMap?.Medium) {
      return 'Medium';
    }
    if (breakpointMap?.Large) {
      return 'Large';
    }
    if (breakpointMap?.XLarge) {
      return 'XLarge';
    }
    return undefined;
  });

  matches(breakpoints: DcBreakpointName[]): Signal<boolean>;
  matches<T>(breakpoints: DcBreakpointName[], fn: (matches: boolean) => T): Signal<T>;
  matches<T>(breakpoints: DcBreakpointName[], fn?: (matches: boolean) => T) {
    return computed(() => {
      const breakpoint = this.breakpoint();
      const matches = breakpoint ? breakpoints.includes(breakpoint) : false;
      return fn ? fn(matches) : matches;
    });
  }
}
