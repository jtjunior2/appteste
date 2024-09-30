import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AberturaOsComponent } from './abertura-os/abertura-os.component';
import { EntregaProdutosComponent } from './entrega-produtos/entrega-produtos.component';
import { EncerramentoOsComponent } from './encerramento-os/encerramento-os.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AberturaOsComponent,
    EntregaProdutosComponent,
    EncerramentoOsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
