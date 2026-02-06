import { numberAttribute } from '@angular/core';
import { DC_ICON_MAX_ITERATIONS } from './icon-constants';

export const mapToDcIconClass = <T = string>(value: T) =>
  value !== 'none' ? `dc-icon--${value}` : '';

export const mapToDcIconMaxIterations = (
  value: number | false | string | null | undefined,
): number | false => {
  if (value === false || value === 'false' || value === null || value === undefined) {
    return false;
  }
  return numberAttribute(value, DC_ICON_MAX_ITERATIONS);
};
