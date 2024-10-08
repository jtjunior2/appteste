import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PoModule, PoToolbarModule, PoMenuModule, PoPageModule,PoTableModule,
PoContainerModule, PoDatepickerModule, PoButtonModule,PoFieldModule  } from '@po-ui/ng-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AberturaOsComponent } from './abertura-os/abertura-os.component';
//import { SelecaoTalhoesComponent } from './selecao-talhoes/selecao-talhoes.component';
//import { EscolhaProdutosComponent } from './escolha-produtos/escolha-produtos.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AberturaOsComponent,
   // SelecaoTalhoesComponent,
   // EscolhaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    FormsModule,ReactiveFormsModule,
    CommonModule, // Importado aqui
    PoToolbarModule, // Importado aqui
    PoMenuModule, // Importado aqui
    PoPageModule, // Importado aqui
    PoTableModule,
    PoContainerModule, PoFieldModule ,
    PoDatepickerModule, PoButtonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }