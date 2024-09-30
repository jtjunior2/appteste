import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abertura-os',
  templateUrl: './abertura-os.component.html',
  styleUrls: ['./abertura-os.component.css']
})
export class AberturaOsComponent {

  osData = {
    data: '',
    anoSafra: '',
    operacao: ''
  };

  anosSafra = [2021, 2022, 2023];  // Exemplo, pode ser buscado via API
  operacoes = ['Plantio', 'Colheita', 'Pulverização'];  // Exemplo

  constructor(private router: Router) {}

  goToTalhoes() {
    // Validar dados antes de prosseguir
    this.router.navigate(['/talhoes']);
  }
}
