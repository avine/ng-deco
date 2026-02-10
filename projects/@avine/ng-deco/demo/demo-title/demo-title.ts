import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { DcIconModule } from '@avine/ng-deco/icon';

@Component({
  selector: 'dc-demo-title',
  host: {
    class: 'dc-demo-title mat-font-headline-lg',
    role: 'heading',
    'aria-level': '1',
  },
  imports: [MatIconModule, DcIconModule],
  templateUrl: './demo-title.html',
  styleUrl: './demo-title.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcDemoTitle {
  private snapshot = inject(ActivatedRoute).snapshot;

  protected icon = this.snapshot.data['icon'];

  protected title = this.snapshot.title;
}
