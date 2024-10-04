import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoTalhoesComponent } from './selecao-talhoes.component';

describe('SelecaoTalhoesComponent', () => {
  let component: SelecaoTalhoesComponent;
  let fixture: ComponentFixture<SelecaoTalhoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoTalhoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoTalhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
