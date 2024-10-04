import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Os, Produto } from '../shared/os.model';

@Component({
  selector: 'app-escolha-produtos',
  templateUrl: './escolha-produtos.component.html',
  styleUrls: ['./escolha-produtos.component.css']
})
export class EscolhaProdutosComponent {
  os: Os;
  produtos: Produto[] = [
    { codigoProduto: 'P001', descricaoProduto: 'Produto A', unidadeMedida: 'kg', areaAplicada: 0, dosagem: 0, tipoMaquina: '' },
    { codigoProduto: 'P002', descricaoProduto: 'Produto B', unidadeMedida: 'L', areaAplicada: 0, dosagem: 0, tipoMaquina: '' },
    { codigoProduto: 'P003', descricaoProduto: 'Produto C', unidadeMedida: 'g', areaAplicada: 0, dosagem: 0, tipoMaquina: '' }
  ];

  produtosColumns = [
    { property: 'codigoProduto', label: 'C�digo' },
    { property: 'descricaoProduto', label: 'Descri��o' },
    { property: 'unidadeMedida', label: 'Unidade' },
    { property: 'areaAplicada', label: '�rea Aplicada', type: 'number' },
    { property: 'dosagem', label: 'Dosagem', type: 'number' },
    { property: 'tipoMaquina', label: 'Tipo de M�quina' }
  ];

  produtosSelecionados: Produto[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.os = navigation.extras.state['os'];
      console.log('Dados da OS recebidos:', this.os);
    }
  }

  onTableChange(event: any) {
    this.produtosSelecionados = event.rows;
  }

  salvar() {
    if (this.produtosSelecionados.length === 0) {
      // Exibir mensagem de erro: "Selecione pelo menos um produto"
      return;
    }

    // Salvar os dados da OS, dos talh�es e dos produtos selecionados
    console.log('Dados da OS:', this.os);
    console.log('Talh�es selecionados:', this.os.talhoes);
    console.log('Produtos selecionados:', this.produtosSelecionados);

    // TODO: Implementar a l�gica para salvar os dados no backend
  }
}