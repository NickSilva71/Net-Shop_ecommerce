import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DescontoPipe } from '../pipes/desconto.pipe';

@NgModule({
  declarations: [
    DescontoPipe,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    DescontoPipe,
  ],
})
export class SharedModule {}
