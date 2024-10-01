import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { AberturaOsComponent } from './abertura-os/abertura-os.component';
import { EntregaProdutosComponent } from './entrega-produtos/entrega-produtos.component';
import { EncerramentoOsComponent } from './encerramento-os/encerramento-os.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },  // Rota inicial
  { path: 'abertura-os', component: AberturaOsComponent },
  { path: 'entrega-produtos', component: EntregaProdutosComponent },
  { path: 'encerramento-os', component: EncerramentoOsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configurando as rotas
  exports: [RouterModule]
})
export class AppRoutingModule { }
