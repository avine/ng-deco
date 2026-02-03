import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { DcLayoutRegionPipe } from '../layout-region-pipe';

@Component({
  selector: 'dc-sidebar',
  host: { class: 'dc-sidebar' },
  imports: [NgTemplateOutlet, DcLayoutRegionPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DcSidebar {}
