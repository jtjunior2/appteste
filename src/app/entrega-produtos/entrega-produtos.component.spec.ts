import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaProdutosComponent } from './entrega-produtos.component';

describe('EntregaProdutosComponent', () => {
  let component: EntregaProdutosComponent;
  let fixture: ComponentFixture<EntregaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
