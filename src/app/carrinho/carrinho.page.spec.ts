import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  carrinhoProdutos: any[] = []; // Lista de produtos no carrinho

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    // Subscrição para atualizar a lista sempre que houver mudanças
    this.carrinhoService.getProdutosObservable().subscribe((produtos) => {
      this.carrinhoProdutos = produtos;
    });
  }

  removerProduto(index: number) {
    this.carrinhoService.removeProduto(index);
  }
}
