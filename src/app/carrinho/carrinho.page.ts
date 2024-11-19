import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  carrinhoProdutos: any[] = [];
  descontoPercentual = 10; // Define o desconto aplicado
  totalComDesconto: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.atualizarCarrinho();
  }

  // Atualiza os produtos no carrinho e recalcula o total
  atualizarCarrinho() {
    this.carrinhoProdutos = this.carrinhoService.getProdutos();
    this.calcularTotalComDesconto();
  }

  // Calcula o total com o desconto aplicado
  calcularTotalComDesconto() {
    this.totalComDesconto = this.carrinhoService.getTotalComDesconto(this.descontoPercentual);
  }

  // Remove um produto e atualiza o estado do carrinho
  removerProduto(index: number) {
    this.carrinhoService.removeProduto(index);
    this.atualizarCarrinho();
  }
}
