import {
  DestroyRef,
  Directive,
  effect,
  inject,
  input,
  numberAttribute,
  TemplateRef,
  untracked,
} from '@angular/core';
import { DcLayoutRegionService } from './layout-region-service';
import { DcLayoutRegionName } from './layout-types';

@Directive({
  selector: '[dcLayoutRegion]',
})
export class DcLayoutRegion {
  readonly template = inject(TemplateRef);

  readonly name = input.required<DcLayoutRegionName>({ alias: 'dcLayoutRegion' });

  readonly index = input(undefined, {
    transform: (value: string | number | undefined) => {
      const index = numberAttribute(value);
      return Number.isNaN(index) ? undefined : index;
    },
  });

  constructor() {
    const service = inject(DcLayoutRegionService);

    // Run once the inputs are set (like `ngOnInit` lifecycle hook).
    effect(() => untracked(() => service.add(this)));

    inject(DestroyRef).onDestroy(() => service.remove(this));
  }
}
