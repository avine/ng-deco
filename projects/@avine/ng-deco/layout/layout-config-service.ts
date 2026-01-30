import {
  DestroyRef,
  effect,
  inject,
  Injectable,
  Injector,
  isSignal,
  Signal,
  signal,
} from '@angular/core';
import { DC_LAYOUT_DEFAULT_CONFIG } from './layout-constants';
import { DcLayoutConfig } from './layout-types';

@Injectable({
  providedIn: 'root',
})
export class DcLayoutConfigService {
  private readonly _config = signal<DcLayoutConfig>(DC_LAYOUT_DEFAULT_CONFIG);

  readonly config = this._config.asReadonly();

  register(
    partialConfig: Partial<DcLayoutConfig> | Signal<Partial<DcLayoutConfig>>,
    injector?: Injector,
  ) {
    const configKeys = new Set<keyof DcLayoutConfig>();

    effect(
      () => {
        const _partialConfig = isSignal(partialConfig) ? partialConfig() : partialConfig;

        this._config.update((config) => ({ ...config, ..._partialConfig }));

        Object.keys(_partialConfig).forEach((key) => configKeys.add(key as keyof DcLayoutConfig));
      },
      { injector },
    );

    const destroyRef = injector?.get(DestroyRef) ?? inject(DestroyRef);
    destroyRef.onDestroy(() => this.reset(...configKeys));
  }

  private reset(...configKeys: (keyof DcLayoutConfig)[]) {
    this._config.update((config) => ({
      ...config,
      ...Object.fromEntries(configKeys.map((key) => [key, DC_LAYOUT_DEFAULT_CONFIG[key]])),
    }));
  }
}
