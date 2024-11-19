import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  products: any[] = [];
  groupedProducts: { [key: string]: any[] } = {};

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.loadProducts();
  }

  // Carregar produtos e agrupar por categoria
  loadProducts() {
    this.produtoService.getProdutos().subscribe((res: any[]) => {
      this.products = res;
      this.groupByCategory();
    });
  }

  // Método para agrupar produtos por categoria
  groupByCategory() {
    this.groupedProducts = this.products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  }
}
