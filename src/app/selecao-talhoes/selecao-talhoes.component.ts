import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Talhao } from '../shared/os.model';

@Component({
  selector: 'app-selecao-talhoes',
  templateUrl: './selecao-talhoes.component.html',
  styleUrls: ['./selecao-talhoes.component.css']
})
export class SelecaoTalhoesComponent {
  talhoes: Talhao[] = [
    // Dados mockados para os talhões
    { codigoTalhao: 'T1', variedadePIMS: 'VP1', descricaoVariedade: 'Variedade 1', hectaresPlantio: 10, hectaresAplicados: 0 },
    { codigoTalhao: 'T2', variedadePIMS: 'VP2', descricaoVariedade: 'Variedade 2', hectaresPlantio: 20, hectaresAplicados: 0 },
    { codigoTalhao: 'T3', variedadePIMS: 'VP3', descricaoVariedade: 'Variedade 3', hectaresPlantio: 30, hectaresAplicados: 0 }
  ];

  talhoesColumns = [
    { property: 'codigoTalhao', label: 'Código do Talhão' },
    { property: 'variedadePIMS', label: 'Variedade PIMS' },
    { property: 'descricaoVariedade', label: 'Descrição da Variedade' },
    { property: 'hectaresPlantio', label: 'Hectares de Plantio' },
    { property: 'hectaresAplicados', label: 'Hectares Aplicados', type: 'number' }
  ];

  talhoesSelecionados: Talhao[] = [];

  constructor(private router: Router) {}

  proximo() {
    // Lógica para validar os talhões selecionados e navegar para a próxima tela
    this.router.navigate(['/escolha-produtos']);
  }
}