import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturaOsComponent } from './abertura-os.component';

describe('AberturaOsComponent', () => {
  let component: AberturaOsComponent;
  let fixture: ComponentFixture<AberturaOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AberturaOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AberturaOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
