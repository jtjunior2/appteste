import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AberturaOsComponent } from './abertura-os/abertura-os.component';
import { EscolhaProdutosComponent } from './escolha-produtos/escolha-produtos.component';
import { SelecaoTalhoesComponent } from './selecao-talhoes/selecao-talhoes.component';

const routes: Routes = [
  { path: '', redirectTo: 'abertura-os', pathMatch: 'full' },
  { path: 'abertura-os', component: AberturaOsComponent },
  { path: 'selecao-talhoes', component: SelecaoTalhoesComponent },
  {    path: 'escolha-produtos',
    loadComponent: () => import('./escolha-produtos/escolha-produtos.component').then(m => m.EscolhaProdutosComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }