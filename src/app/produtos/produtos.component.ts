import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtoData = {
    produto: '',
    dosagem: 0
  };

  produtosSelecionados = [];
  produtosColumns = [
    { property: 'produto', label: 'Produto' },
    { property: 'dosagem', label: 'Dosagem (L/ha)' }
  ];

  produtos = ['Produto 1', 'Produto 2'];  // Exemplo

  constructor(private router: Router) {}

  adicionarProduto() {
    this.produtosSelecionados.push({ ...this.produtoData });
  }

  concluir() {
    // Finalizar a OS
    console.log('OS concluída com produtos:', this.produtosSelecionados);
    this.router.navigate(['/']);
  }
}
