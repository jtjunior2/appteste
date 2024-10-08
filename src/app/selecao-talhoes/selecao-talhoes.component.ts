import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule, PoToolbarModule, PoMenuModule, PoPageModule, PoTableModule,
  PoContainerModule, PoDatepickerModule, PoButtonModule, PoTableComponent } from '@po-ui/ng-components';
import { OsStateService } from '../shared/os-state.service';
import { Talhao, Os } from '../shared/os.model';

@Component({
  selector: 'app-selecao-talhoes',
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
    PoDatepickerModule,
    PoButtonModule
  ],
  templateUrl: './selecao-talhoes.component.html',
  styleUrls: ['./selecao-talhoes.component.css']
})
export class SelecaoTalhoesComponent {
  os: Os;
  talhoes: Talhao[] = [
    { selecionado: false, codigoTalhao: 'T001', variedadePIMS: 'V001', descricaoVariedade: 'Variedade A', hectaresPlantio: 10, hectaresAplicados: 1 },
    { selecionado: false, codigoTalhao: 'T002', variedadePIMS: 'V002', descricaoVariedade: 'Variedade B', hectaresPlantio: 20, hectaresAplicados: 1 },
    { selecionado: false, codigoTalhao: 'T003', variedadePIMS: 'V003', descricaoVariedade: 'Variedade C', hectaresPlantio: 15, hectaresAplicados: 1 },
    { selecionado: false, codigoTalhao: 'T004', variedadePIMS: 'V004', descricaoVariedade: 'Variedade D', hectaresPlantio: 20, hectaresAplicados: 1 }
  ];

  talhoesColumns = [
    { type: 'selection', property: 'selecionado', label: 'Selecionado' },
    { property: 'codigoTalhao', label: 'Código' },
    { property: 'variedadePIMS', label: 'Variedade PIMS' },
    { property: 'descricaoVariedade', label: 'Descrição' },
    { property: 'hectaresPlantio', label: 'Hectares Plantio', type: 'number' },
    { property: 'hectaresAplicados', label: 'Hectares Aplicados', type: 'number' }
  ];

  constructor(private router: Router, private osStateService: OsStateService) {
    this.os = this.osStateService.getOs() || {
      codigoOS: 1,
      dataOS: new Date(),
      anoSafra: '2024',
      periodoProducao: '1',
      centroCusto: '',
      aglomerado: '',
      fazenda: '',
      operacao: '',
      aeronave: '',
      piloto: '',
      vazao: 0,
      talhoes: [],
      produtos: []
    };
  }

  proximo() {
    const selectedTalhoes = this.talhoes.filter(talhao => talhao.selecionado);
    if (selectedTalhoes.length === 0) {
      alert("Selecione pelo menos um talhão.");
      return;
    }

    // Salva os talhões selecionados no serviço de estado
    this.osStateService.setTalhoes(selectedTalhoes);

    // Navegar para a próxima tela
    this.router.navigate(['/escolha-produtos']);
  }

  voltar() {
    this.router.navigate(['/abertura-os']);
  }
}
