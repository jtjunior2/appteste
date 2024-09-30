import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';  // Importa a classe Observable para retorno de chamadas assíncronas

@Injectable({
  providedIn: 'root'  // Faz o serviço disponível em toda a aplicação
})
export class OSService {

  private apiURL = 'https://api.exemplo.com';  // URL base da API, substitua pela sua URL

  constructor(private http: HttpClient) {}  // Injeta o HttpClient no serviço

  // Função para abrir uma nova Ordem de Serviço (OS)
  abrirOS(os: any): Observable<any> {
    const url = `${this.apiURL}/os/abrir`;  // Define o endpoint para abrir a OS
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });  // Define os headers da requisição
    return this.http.post(url, os, { headers });  // Faz a requisição POST para abrir a OS
  }

  // Função para registrar entrega ou devolução de produtos
  registrarEntrega(entrega: any): Observable<any> {
    const url = `${this.apiURL}/os/entregar`;  // Endpoint para registrar a entrega
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, entrega, { headers });  // Faz a requisição POST para registrar a entrega
  }

  // Função para encerrar uma Ordem de Serviço (OS)
  encerrarOS(encerramento: any): Observable<any> {
    const url = `${this.apiURL}/os/encerrar`;  // Endpoint para encerrar a OS
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, encerramento, { headers });  // Faz a requisição POST para encerrar a OS
  }

  // Função para buscar dados dinâmicos, como anos safra, talhões, etc.
  buscarTalhoes(fazenda: string): Observable<any> {
    const url = `${this.apiURL}/os/talhoes?fazenda=${fazenda}`;  // Exemplo de endpoint dinâmico para buscar talhões
    return this.http.get(url);  // Faz uma requisição GET para buscar talhões
  }

  buscarProdutos(): Observable<any> {
    const url = `${this.apiURL}/os/produtos`;  // Exemplo de endpoint para buscar produtos
    return this.http.get(url);  // Faz uma requisição GET para buscar produtos
  }
}
