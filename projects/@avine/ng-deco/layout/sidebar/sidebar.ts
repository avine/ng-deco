import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { DcLayoutSlotPipe } from '../layout-slot-pipe';

@Component({
  selector: 'dc-sidebar',
  host: { class: 'dc-sidebar' },
  imports: [NgTemplateOutlet, DcLayoutSlotPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidebar {}
