import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encerramento-os',
  templateUrl: './encerramento-os.component.html',
  styleUrls: ['./encerramento-os.component.css']
})
export class EncerramentoOsComponent {

  encerramentoData = {
    horasTrabalho: 0,
    horasPulverizacao: 0,
    observacoes: '',
    temperatura: 0,
    umidade: 0,
    velocidadeVento: 0
  };

  constructor(private router: Router) {}

  encerrarOS() {
    // Validação e encerramento da OS
    console.log('OS encerrada com os dados:', this.encerramentoData);
    this.router.navigate(['/']);
  }
}
