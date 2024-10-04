import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaProdutosComponent } from './escolha-produtos.component';

describe('EscolhaProdutosComponent', () => {
  let component: EscolhaProdutosComponent;
  let fixture: ComponentFixture<EscolhaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
