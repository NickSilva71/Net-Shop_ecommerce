import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DescontoPipe } from '../pipes/desconto.pipe'; 
import { CarrinhoIconComponent } from '../components/carrinho-icon/carrinho-icon.component'; 

@NgModule({
  declarations: [
    DescontoPipe,
    CarrinhoIconComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    DescontoPipe,
    CarrinhoIconComponent,
  ],
})
export class SharedModule {}
