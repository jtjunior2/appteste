import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talhoes',
  templateUrl: './talhoes.component.html',
  styleUrls: ['./talhoes.component.css']
})
export class TalhoesComponent {

  talhaoData = {
    setor: '',
    talhao: '',
    hectares: 0
  };

  talhoesSelecionados = [];
  talhoesColumns = [
    { property: 'setor', label: 'Setor' },
    { property: 'talhao', label: 'Talh�o' },
    { property: 'hectares', label: 'Hectares Aplicados' }
  ];

  setores = ['Setor 1', 'Setor 2'];  // Exemplo
  talhoes = ['Talh�o 1', 'Talh�o 2'];  // Exemplo

  constructor(private router: Router) {}

  adicionarTalhao() {
    this.talhoesSelecionados.push({ ...this.talhaoData });
  }

  goToProdutos() {
    // Validar dados antes de prosseguir
    this.router.navigate(['/produtos']);
  }
}
