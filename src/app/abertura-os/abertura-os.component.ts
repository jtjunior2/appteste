import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Os } from '../shared/models/os.model';

@Component({
  selector: 'app-abertura-os',
  templateUrl: './abertura-os.component.html',
  styleUrls: ['./abertura-os.component.css']
})
export class AberturaOsComponent {
  os: Os = {
    codigoOS: 1, // Valor mockado
    dataOS: new Date(),
    anoSafra: '',
    periodoProducao: '',
    centroCusto: '',
    aglomerado: '',
    fazenda: '',
    operacao: '',
    vazao: 0,
    talhoes: [],
    produtos: []
  };

  anosSafra = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' }
  ];

  periodosProducao = [
    { label: 'Per�odo 1', value: '1' },
    { label: 'Per�odo 2', value: '2' }
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
    { label: 'Opera��o Terrestre', value: 'terrestre' },
    { label: 'Opera��o A�rea', value: 'aerea' }
  ];

  exibirCamposAeronave = false;

  constructor(private router: Router) {}

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
    this.exibirCamposAeronave = event === 'aerea';
  }

  proximo() {
    // L�gica para validar os campos e navegar para a pr�xima tela
    this.router.navigate(['/selecao-talhoes']);
  }
}