import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
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
    { label: 'Período 1', value: '1' },
    { label: 'Período 2', value: '2' }
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
    { label: 'Operação Terrestre', value: { codigo: 'terrestre', descricao: 'Operação Terrestre' } },
    { label: 'Operação Aérea', value: { codigo: 'aerea', descricao: 'Operação Aérea' } }
  ];

  exibirCamposAeronave = false;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

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

  onOperacaoChange(event: any) {
    console.log('Método onOperacaoChange() chamado');
    console.log('Evento:', event);

    this.os.operacao = event.value;
    console.log('os.operacao:', this.os.operacao);

    this.exibirCamposAeronave = (event.value.codigo ?? '') === 'aerea';
    console.log('exibirCamposAeronave:', this.exibirCamposAeronave);

    this.cdRef.detectChanges();
  }

  proximo() {
    this.router.navigate(['/selecao-talhoes'], { state: { os: this.os } });
  }
}