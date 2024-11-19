import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private produtos: any[] = [];

  getProdutos() {
    return this.produtos;
  }

  addProduto(produto: any) {
    this.produtos.push(produto);
  }

  removeProduto(index: number) {
    this.produtos.splice(index, 1);
  }

  // Método que calcula o total com desconto
  getTotalComDesconto(percentualDesconto: number): number {
    return this.produtos.reduce((total, produto) => {
      const precoComDesconto = produto.price * (1 - percentualDesconto / 100);
      return total + precoComDesconto;
    }, 0);
  }

  clearCarrinho(){
    this.produtos = [];
   }
  
}

 

