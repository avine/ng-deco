import { DOCUMENT, inject, Injectable } from '@angular/core';
import { _DcStorage } from './_storage';

@Injectable({
  providedIn: 'root',
})
export class DcSessionStorage extends _DcStorage {
  protected storage = inject(DOCUMENT).defaultView?.sessionStorage;
}
