import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OsStateService } from '../shared/os-state.service';
import { Os } from '../shared/os.model';

@Component({
  selector: 'app-abertura-os',
  templateUrl: './abertura-os.component.html',
  styleUrls: ['./abertura-os.component.css']
})
export class AberturaOsComponent {
  os: Os = {
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

  anosSafra = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' }
  ];

  periodosProducao = [
    { label: 'Periodo 1', value: '1' },
    { label: 'Periodo 2', value: '2' }
  ];

  aglomerados = [
    { label: 'Aglomerado 1', value: 'AG1' },
    { label: 'Aglomerado 2', value: 'AG2' }
  ];

  fazendas = [
    { label: 'Fazenda 1', value: 'F1' },
    { label: 'Fazenda 2', value: 'F2' }
  ];

  operacoes = [
        { label: 'Operacao Terrestre', value: { codigo: 'terrestre', descricao: 'Operacao Terrestre' } },
        { label: 'Operacao Aerea', value: { codigo: 'aerea', descricao: 'Operacao Aerea' } }
  ];

  exibirCamposAeronave = false;



  onAnoSafraChange(event: any) {
    this.os.anoSafra = event;
  }

  onPeriodoProducaoChange(event: any) {
    this.os.periodoProducao = event;
  }

  onAglomeradoChange(event: any) {
    this.os.aglomerado = event;
  }

  onFazendaChange(event: any) {
    this.os.fazenda = event;
  }

  definirOperacao(event: any) {
    this.os.operacao = event.codigo;
    this.exibirCamposAeronave = this.os.operacao === 'aerea';
}

constructor(private router: Router, private cdRef: ChangeDetectorRef, private osStateService: OsStateService) {}

proximo() {
  this.osStateService.setOs(this.os); // Salva os dados no serviço
  this.router.navigate(['/selecao-talhoes']);
}
}