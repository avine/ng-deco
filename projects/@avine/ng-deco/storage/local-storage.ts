import { DOCUMENT, inject, Injectable } from '@angular/core';
import { _DcStorage } from './_storage';

@Injectable({
  providedIn: 'root',
})
export class DcLocalStorage extends _DcStorage {
  protected storage = inject(DOCUMENT).defaultView?.localStorage;
}
