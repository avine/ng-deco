import {
  Directive,
  booleanAttribute,
  computed,
  effect,
  input,
  signal,
  untracked,
} from '@angular/core';
import { DC_ICON_MAX_ITERATIONS } from './icon-constants';
import { DcIconAnimation, DcIconPull, DcIconSize } from './icon-types';
import { mapToDcIconClass, mapToDcIconMaxIterations } from './icon-utils';

/**
 * Enhancing the Material icon component (`mat-icon`)
 *
 * The directive requires CSS styles to work properly that are defined and imported globally in:
 *   `@avine/ng-deco/styles/modules/_icon.scss`
 *
 * @example
 * ```html
 * <mat-icon dcIcon size="xl" pull="left" animation="beat">home</mat-icon>
 * ```
 */
@Directive({
  selector: '[dcIcon]',
  host: {
    '[class]': 'hostClass()',
    '[style.font-variation-settings]': 'computedFill()',
    '[style.--dc-icon-fill-duration]': 'fillDuration()',
    '[style.--dc-icon-animation-duration]': 'animationDuration()',
    '(animationiteration)': 'currentIteration.set($event.elapsedTime)',
  },
})
export class DcIcon {
  pull = input('', { transform: mapToDcIconClass<DcIconPull> });

  size = input('', { transform: mapToDcIconClass<DcIconSize> });

  fill = input(false, { transform: booleanAttribute });

  fillDuration = input<string>();

  animation = input('', { transform: mapToDcIconClass<DcIconAnimation> });

  animationDuration = input<string>();

  maxIterations = input(DC_ICON_MAX_ITERATIONS, { transform: mapToDcIconMaxIterations });

  protected currentIteration = signal(0);

  protected computedFill = computed(() => `"FILL" ${this.fill() ? 1 : 0}`);

  protected computedAnimation = computed(() => {
    const animation = this.animation();
    if (!animation) {
      return '';
    }

    const maxIterations = this.maxIterations();
    if (maxIterations === false) {
      return animation;
    }

    return this.currentIteration() < maxIterations ? this.animation() : '';
  });

  protected hostClass = computed(() =>
    ['dc-icon', this.size(), this.pull(), this.computedAnimation()]
      .filter((value) => value)
      .join(' '),
  );

  constructor() {
    effect(() => {
      // Run effect when `maxIterations` changes.
      const maxIterations = this.maxIterations();
      if (maxIterations === false) {
        return;
      }

      // Run effect when `animation` changes (and `maxIterations` is NOT `false`).
      this.animation();

      if (untracked(() => this.currentIteration() >= maxIterations)) {
        this.currentIteration.set(0);
      }
    });
  }
}
