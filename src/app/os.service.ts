import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';  // Importa a classe Observable para retorno de chamadas ass�ncronas

@Injectable({
  providedIn: 'root'  // Faz o servi�o dispon�vel em toda a aplica��o
})
export class OSService {

  private apiURL = 'https://api.exemplo.com';  // URL base da API, substitua pela sua URL

  constructor(private http: HttpClient) {}  // Injeta o HttpClient no servi�o

  // Fun��o para abrir uma nova Ordem de Servi�o (OS)
  abrirOS(os: any): Observable<any> {
    const url = `${this.apiURL}/os/abrir`;  // Define o endpoint para abrir a OS
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });  // Define os headers da requisi��o
    return this.http.post(url, os, { headers });  // Faz a requisi��o POST para abrir a OS
  }

  // Fun��o para registrar entrega ou devolu��o de produtos
  registrarEntrega(entrega: any): Observable<any> {
    const url = `${this.apiURL}/os/entregar`;  // Endpoint para registrar a entrega
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, entrega, { headers });  // Faz a requisi��o POST para registrar a entrega
  }

  // Fun��o para encerrar uma Ordem de Servi�o (OS)
  encerrarOS(encerramento: any): Observable<any> {
    const url = `${this.apiURL}/os/encerrar`;  // Endpoint para encerrar a OS
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, encerramento, { headers });  // Faz a requisi��o POST para encerrar a OS
  }

  // Fun��o para buscar dados din�micos, como anos safra, talh�es, etc.
  buscarTalhoes(fazenda: string): Observable<any> {
    const url = `${this.apiURL}/os/talhoes?fazenda=${fazenda}`;  // Exemplo de endpoint din�mico para buscar talh�es
    return this.http.get(url);  // Faz uma requisi��o GET para buscar talh�es
  }

  buscarProdutos(): Observable<any> {
    const url = `${this.apiURL}/os/produtos`;  // Exemplo de endpoint para buscar produtos
    return this.http.get(url);  // Faz uma requisi��o GET para buscar produtos
  }
}
