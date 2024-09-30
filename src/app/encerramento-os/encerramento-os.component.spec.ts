import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerramentoOsComponent } from './encerramento-os.component';

describe('EncerramentoOsComponent', () => {
  let component: EncerramentoOsComponent;
  let fixture: ComponentFixture<EncerramentoOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncerramentoOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncerramentoOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
