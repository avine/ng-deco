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
import { DcLayoutSlotService } from './layout-slot-service';
import { DcLayoutSlotName } from './layout-types';

@Directive({
  selector: '[dcLayoutSlotItem]',
})
export class DcLayoutSlotItem {
  readonly template = inject(TemplateRef);

  readonly name = input.required<DcLayoutSlotName>({ alias: 'dcLayoutSlotItem' });

  readonly index = input(undefined, {
    transform: (value: string | number | undefined) => {
      const index = numberAttribute(value);
      return Number.isNaN(index) ? undefined : index;
    },
  });

  constructor() {
    const service = inject(DcLayoutSlotService);

    // Run once the inputs are set (like `ngOnInit` lifecycle hook).
    effect(() => untracked(() => service.addItem(this)));

    inject(DestroyRef).onDestroy(() => service.removeItem(this));
  }
}
