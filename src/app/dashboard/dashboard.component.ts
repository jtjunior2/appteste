import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  goToAberturaOs() {
    this.router.navigate(['/abertura-os']);
  }

  goToEntregaProdutos() {
    this.router.navigate(['/entrega-produtos']);
  }

  goToEncerramentoOs() {
    this.router.navigate(['/encerramento-os']);
  }
}
