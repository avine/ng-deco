import { inject, Pipe, PipeTransform } from '@angular/core';
import { DcLayoutSlotService } from './layout-slot-service';
import { DcLayoutSlotName } from './layout-types';

// TODO: rename "layout-slot-items-pipe.ts"

@Pipe({
  name: 'dcLayoutSlot',
})
export class DcLayoutSlotPipe implements PipeTransform {
  private slotService = inject(DcLayoutSlotService);

  transform(name: DcLayoutSlotName) {
    return this.slotService.getItems(name);
  }
}
