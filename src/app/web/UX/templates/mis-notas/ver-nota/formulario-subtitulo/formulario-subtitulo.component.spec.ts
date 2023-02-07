import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSubtituloComponent } from './formulario-subtitulo.component';

describe('FormularioSubtituloComponent', () => {
  let component: FormularioSubtituloComponent;
  let fixture: ComponentFixture<FormularioSubtituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSubtituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
