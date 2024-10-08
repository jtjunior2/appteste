// src/app/shared/os-state.service.ts
import { Injectable } from '@angular/core';
import { Os, Talhao, Produto } from './os.model';

@Injectable({
  providedIn: 'root'
})
export class OsStateService {
  private osKey = 'os';
  private talhoesKey = 'talhoes';
  private produtosKey = 'produtos';

  setOs(os: Os): void {
    localStorage.setItem(this.osKey, JSON.stringify(os));
  }

  getOs(): Os | null {
    const osData = localStorage.getItem(this.osKey);
    return osData ? JSON.parse(osData) : null;
  }

  setTalhoes(talhoes: Talhao[]): void {
    localStorage.setItem(this.talhoesKey, JSON.stringify(talhoes));
  }

  getTalhoes(): Talhao[] {
    const talhoesData = localStorage.getItem(this.talhoesKey);
    return talhoesData ? JSON.parse(talhoesData) : [];
  }

  setProdutos(produtos: Produto[]): void {
    localStorage.setItem(this.produtosKey, JSON.stringify(produtos));
  }

  getProdutos(): Produto[] {
    const produtosData = localStorage.getItem(this.produtosKey);
    return produtosData ? JSON.parse(produtosData) : [];
  }
}
