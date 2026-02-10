import {
  booleanAttribute,
  Component,
  computed,
  input,
  numberAttribute,
  ViewEncapsulation,
} from '@angular/core';
import { DC_DEMO_LOREMS } from './demo-lorem-utils';

@Component({
  selector: 'dc-demo-lorem',
  host: { class: 'dc-demo-lorem' },
  templateUrl: './demo-lorem.html',
  styleUrl: './demo-lorem.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcDemoLorem {
  count = input(1, { transform: numberAttribute });

  noTag = input(false, { transform: booleanAttribute });

  protected lorems = computed(() =>
    Array<string>(this.count())
      .fill('')
      .map((_, index) => DC_DEMO_LOREMS[index % DC_DEMO_LOREMS.length]),
  );
}
