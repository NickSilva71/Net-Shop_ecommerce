import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'desconto' })
export class DescontoPipe implements PipeTransform {
  transform(preco: number, desconto: number): string {
    if (!preco || !desconto) {
      return 'Preço inválido';
    }

    // Calcula o preço com desconto
    const precoDescontado = preco - (preco * desconto) / 100;

    // Formata o preço com a moeda local (BRL)
    return `R$ ${precoDescontado.toFixed(2).replace('.', ',')}`;
  }
}

