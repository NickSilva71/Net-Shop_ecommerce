import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';

import { CarrinhoPage } from './carrinho.page';

import { HighlightDirective } from '../directives/highlight.directive';
import { VazioDirective } from '../directives/vazio.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoPageRoutingModule,
    SharedModule
  ],
  declarations: [CarrinhoPage, HighlightDirective, VazioDirective]
})
export class CarrinhoPageModule {}
