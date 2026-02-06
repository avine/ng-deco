import { inject, provideEnvironmentInitializer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DcIconFontSetClass } from './icon-types';

export const provideDcIcons = (fontSetClass: DcIconFontSetClass) =>
  provideEnvironmentInitializer(() => {
    const matIconRegistry = inject(MatIconRegistry);

    const defaultFontSetClass = matIconRegistry.getDefaultFontSetClass();

    const customFontSetClass = defaultFontSetClass
      .filter((fontSetClass) => fontSetClass !== 'material-icons') // Remove default...
      .concat([fontSetClass]); // ...and add custom

    matIconRegistry.setDefaultFontSetClass(...customFontSetClass);
  });
