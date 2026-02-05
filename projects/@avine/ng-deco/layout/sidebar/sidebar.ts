import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { DcLayoutSlotItemsPipe } from '../layout-slot-items-pipe';

@Component({
  selector: 'dc-sidebar',
  host: { class: 'dc-sidebar' },
  imports: [NgTemplateOutlet, DcLayoutSlotItemsPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidebar {}
