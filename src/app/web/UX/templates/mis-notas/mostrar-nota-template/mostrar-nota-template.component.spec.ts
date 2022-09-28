import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNotaTemplateComponent } from './mostrar-nota-template.component';

describe('MostrarNotaTemplateComponent', () => {
  let component: MostrarNotaTemplateComponent;
  let fixture: ComponentFixture<MostrarNotaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarNotaTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNotaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
