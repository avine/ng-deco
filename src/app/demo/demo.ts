import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DcLayoutModule, DcLayoutSideService } from '@avine/ng-deco/layout';

@Component({
  selector: 'app-demo',
  imports: [DcLayoutModule],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Demo {
  sideService = inject(DcLayoutSideService);

  items = Array(1).fill('');
}
