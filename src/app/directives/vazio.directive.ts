import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appVazio]',  // Seletor da diretiva
})
export class VazioDirective implements OnChanges {
  @Input('appVazio') lista: any[] = [];  //A variável 'lista' recebe os itens do carrinho

  @HostBinding('attr.disabled') isDisabled: boolean = false;  // Habilitar/desabilitar o botão

  ngOnChanges() {
    // Desabilitar o botão se o carrinho estiver vazio
    this.isDisabled = this.lista.length === 0;
  }
}
