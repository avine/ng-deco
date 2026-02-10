import { inject, Injectable } from '@angular/core';
import { DcLocalStorage } from '@avine/ng-deco/storage';
import { DC_DEMO_FOCUS } from './demo-constants';

@Injectable({
  providedIn: 'root',
})
export class DcDemoService {
  /**
   * The "focus" mode indicates the need to hide certain elements of the page,
   * for example to take screenshots during e2e tests with Playwright.
   */
  readonly focus = inject(DcLocalStorage).getItem(DC_DEMO_FOCUS) === true;
}
