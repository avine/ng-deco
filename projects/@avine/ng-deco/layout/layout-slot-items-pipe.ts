import { inject, Pipe, PipeTransform } from '@angular/core';
import { DcLayoutSlotService } from './layout-slot-service';
import { DcLayoutSlotName } from './layout-types';

@Pipe({
  name: 'dcLayoutSlotItems',
})
export class DcLayoutSlotItemsPipe implements PipeTransform {
  private slotService = inject(DcLayoutSlotService);

  transform(name: DcLayoutSlotName) {
    return this.slotService.getItems(name);
  }
}
