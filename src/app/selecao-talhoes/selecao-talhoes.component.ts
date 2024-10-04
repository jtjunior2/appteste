import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Os, Talhao } from '../shared/os.model';

@Component({
  selector: 'app-selecao-talhoes',
  templateUrl: './selecao-talhoes.component.html',
  styleUrls: ['./selecao-talhoes.component.css']
})
export class SelecaoTalhoesComponent {
  os: Os;
  talhoes: Talhao[] = [
    { codigoTalhao: 'T001', variedadePIMS: 'V001', descricaoVariedade: 'Variedade A', hectaresPlantio: 10, hectaresAplicados: 0 },
    { codigoTalhao: 'T002', variedadePIMS: 'V002', descricaoVariedade: 'Variedade B', hectaresPlantio: 20, hectaresAplicados: 0 },
    { codigoTalhao: 'T003', variedadePIMS: 'V003', descricaoVariedade: 'Variedade C', hectaresPlantio: 15, hectaresAplicados: 0 }
  ];

  talhoesColumns = [
    { property: 'codigoTalhao', label: 'Código' },
    { property: 'variedadePIMS', label: 'Variedade PIMS' },
    { property: 'descricaoVariedade', label: 'Descrição' },
    { property: 'hectaresPlantio', label: 'Hectares Plantio', type: 'number' },
    { property: 'hectaresAplicados', label: 'Hectares Aplicados', type: 'number' }
  ];

  talhoesSelecionados: Talhao[] = [];

  constructor(private router: Router) {
    this.os = history.state.os;
    console.log('Dados da OS recebidos:', this.os);
  }

  onTableChange(event: any) {
    this.talhoesSelecionados = event.rows;
  }

  proximo() {
    if (this.talhoesSelecionados.length === 0) {
      // Exibir mensagem de erro: "Selecione pelo menos um talhão"
      return;
    }

    // Navegar para a próxima tela, passando os dados da OS e dos talhões selecionados
    this.router.navigate(['/escolha-produtos'], { state: { os: this.os, talhoes: this.talhoesSelecionados } });
  }
}