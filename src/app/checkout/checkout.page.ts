import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  carrinhoProdutos: any[] = [];
  descontoPercentual = 10; // Define o desconto aplicado
  totalComDesconto: number = 0;
  compraFinalizada: boolean = false;

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ngOnInit() {
    this.carrinhoProdutos = this.carrinhoService.getProdutos();
    this.calcularTotalComDesconto();
  }

  calcularTotalComDesconto() {
    this.totalComDesconto = this.carrinhoService.getTotalComDesconto(this.descontoPercentual);
  }

  removerProduto(index: number) {
    this.carrinhoService.removeProduto(index);
    this.carrinhoProdutos = this.carrinhoService.getProdutos();
    this.calcularTotalComDesconto();
  }

  finalizarCompra() {
    this.compraFinalizada = true;
    this.carrinhoService.clearCarrinho();

    // Redireciona para a página inicial após 3 segundos
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
