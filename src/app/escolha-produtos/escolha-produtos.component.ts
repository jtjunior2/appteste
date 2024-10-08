import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule, PoToolbarModule, PoMenuModule, PoPageModule, PoTableModule, PoContainerModule, PoButtonModule } from '@po-ui/ng-components';
import { OsStateService } from '../shared/os-state.service';
import { Produto } from '../shared/os.model';

@Component({
  selector: 'escolha-produtos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoTableModule,
    PoContainerModule,
    PoButtonModule
  ],
  templateUrl: './escolha-produtos.component.html',
  styleUrls: ['./escolha-produtos.component.css']
})
export class EscolhaProdutosComponent {
  produtosDisponiveis: Produto[] = [
    { codigoProduto: 'P001', descricaoProduto: 'Produto A', unidadeMedida: 'kg', quantidade: 0 },
    { codigoProduto: 'P002', descricaoProduto: 'Produto B', unidadeMedida: 'l', quantidade: 0 },
    { codigoProduto: 'P003', descricaoProduto: 'Produto C', unidadeMedida: 'kg', quantidade: 0 }
  ];

  // Lista para usar no template
  produtosOptions = this.produtosDisponiveis.map(prod => ({
    value: prod.codigoProduto,
    label: prod.descricaoProduto
  }));

  produtoSelecionado: Produto = { codigoProduto: '', descricaoProduto: '', unidadeMedida: '', quantidade: 0 };
  produtosSelecionados: Produto[] = [];

  constructor(private router: Router, private osStateService: OsStateService) {
    const os = this.osStateService.getOs(); // Recupera a OS
    const talhoes = this.osStateService.getTalhoes(); // Recupera os talhões selecionados
    console.log('Dados da OS:', os);
    console.log('Talhões selecionados:', talhoes);

    // Recupera produtos previamente selecionados se houver
    this.produtosSelecionados = this.osStateService.getProdutos() || [];
  }

  onProdutoChange(codigoProduto: string) {
    const produto = this.produtosDisponiveis.find(prod => prod.codigoProduto === codigoProduto);
    if (produto) {
      this.produtoSelecionado = { ...produto, quantidade: 0 }; // Reseta a quantidade ao selecionar um novo produto
    }
  }

  adicionarProduto() {
    if (this.produtoSelecionado.codigoProduto && this.produtoSelecionado.quantidade > 0) {
      const produtoExistente = this.produtosSelecionados.find(prod => prod.codigoProduto === this.produtoSelecionado.codigoProduto);
      
      if (produtoExistente) {
        // Atualiza a quantidade se o produto já estiver na lista
        produtoExistente.quantidade += this.produtoSelecionado.quantidade;
      } else {
        // Adiciona um novo produto à lista
        this.produtosSelecionados.push({ ...this.produtoSelecionado });
      }

      // Reseta o produto selecionado
      this.produtoSelecionado = { codigoProduto: '', descricaoProduto: '', unidadeMedida: '', quantidade: 0 };
    } else {
      alert('Por favor, preencha todos os campos antes de adicionar um produto.');
    }
  }

  voltar() {
    this.router.navigate(['/selecao-talhoes']); // Navega para a tela de Seleção de Talhões
  }

  finalizar() {
    this.osStateService.setProdutos(this.produtosSelecionados); // Salva os produtos selecionados no estado
    console.log('Ordem de Serviço finalizada com os seguintes produtos:', this.produtosSelecionados);
    alert('Ordem de Serviço finalizada com sucesso!');
  }
}
