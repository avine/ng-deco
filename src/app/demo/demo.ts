import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { DcDemoModule, dcDemoProp } from '@avine/ng-deco/demo';
import { DcLayoutModule, DcLayoutSideService } from '@avine/ng-deco/layout';

@Component({
  selector: 'app-demo',
  imports: [DcLayoutModule, DcDemoModule],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Demo {
  sideService = inject(DcLayoutSideService);

  state = {
    size: dcDemoProp([1, 10, 20]),
  };

  items = computed(() => Array(this.state.size()).fill(''));
}
