import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrega-produtos',
  templateUrl: './entrega-produtos.component.html',
  styleUrls: ['./entrega-produtos.component.css']
})
export class EntregaProdutosComponent {

  entregaData = {
    produto: '',
    quantidade: 0,
    tipo: '',
    localOrigem: '',
    localDestino: ''
  };

  entregasRegistradas = [];
  entregasColumns = [
    { property: 'produto', label: 'Produto' },
    { property: 'quantidade', label: 'Quantidade Entregue' },
    { property: 'tipo', label: 'Tipo de Movimenta��o' },
    { property: 'localOrigem', label: 'Local de Origem' },
    { property: 'localDestino', label: 'Local de Destino' }
  ];

  produtos = ['Produto 1', 'Produto 2'];  // Exemplo
  tiposMovimentacao = ['Entrega', 'Devolu��o', 'Consumo'];  // Exemplo

  constructor(private router: Router) {}

  registrarEntrega() {
    // Valida��o e registro de entrega
    this.entregasRegistradas.push({ ...this.entregaData });
    console.log('Entrega registrada:', this.entregaData);
  }
}
