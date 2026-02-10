import { WritableSignal } from '@angular/core';

export type DcDemoPropConfig<T> = Partial<{
  defaultValue: T;
  withHeading?: string;
}>;

export type DcDemoProp<T> = WritableSignal<T> & {
  next(): void;
  values: T[];
  config: DcDemoPropConfig<T>;
};

export type DcDemoState<T> = Record<keyof T, DcDemoProp<T[keyof T]>>;
