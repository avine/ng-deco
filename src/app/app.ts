import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DcLayoutModule } from '@avine/ng-deco/layout';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterOutlet,
    RouterLink,
    DcLayoutModule,
  ],
  templateUrl: './app.html',
})
export class App {}
