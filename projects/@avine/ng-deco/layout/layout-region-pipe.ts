import { inject, Pipe, PipeTransform } from '@angular/core';
import { DcLayoutRegionService } from './layout-region-service';
import { DcLayoutRegionName } from './layout-types';

@Pipe({
  name: 'dcLayoutRegion',
})
export class DcLayoutRegionPipe implements PipeTransform {
  private layoutRegionService = inject(DcLayoutRegionService);

  transform(name: DcLayoutRegionName) {
    return this.layoutRegionService.get(name);
  }
}
