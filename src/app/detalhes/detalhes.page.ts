import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  produto: any;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.produtoService.getProdutoById(+productId).subscribe(
        (data) => {
          this.produto = data;
        },
        (error) => {
          console.error('Erro ao buscar detalhes do produto:', error);
        }
      );
    }
  }

  addToCarrinho() {
    this.carrinhoService.addProduto(this.produto);
    alert('Produto adicionado ao carrinho!');
  }
}
