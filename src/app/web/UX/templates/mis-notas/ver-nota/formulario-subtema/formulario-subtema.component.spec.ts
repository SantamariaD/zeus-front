import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSubtemaComponent } from './formulario-subtema.component';

describe('FormularioSubtemaComponent', () => {
  let component: FormularioSubtemaComponent;
  let fixture: ComponentFixture<FormularioSubtemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSubtemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSubtemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
