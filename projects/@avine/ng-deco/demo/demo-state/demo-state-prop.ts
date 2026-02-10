import { signal } from '@angular/core';
import { DcDemoProp, DcDemoPropConfig } from './demo-state-types';

export const dcDemoProp = <T>(values: T[], config: DcDemoPropConfig<T> = {}): DcDemoProp<T> => {
  const defaultValue = 'defaultValue' in config ? config.defaultValue! : values[0];

  const prop = signal<T>(defaultValue) as DcDemoProp<T>;

  prop.next = () => {
    const nextIndex = (values.indexOf(prop()) + 1) % values.length;
    prop.set(values[nextIndex]);
  };

  prop.values = values;

  prop.config = config;

  return prop;
};
