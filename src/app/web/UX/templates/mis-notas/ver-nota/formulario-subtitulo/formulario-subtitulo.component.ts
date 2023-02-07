import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { NotasConsulta } from 'src/app/web/informacion/interface/notas';
import { selectNotaSubtemasInformacion } from 'src/app/web/informacion/state';

@Component({
  selector: 'app-formulario-subtitulo',
  templateUrl: './formulario-subtitulo.component.html',
  styleUrls: ['./formulario-subtitulo.component.scss'],
})
export class FormularioSubtituloComponent implements OnInit {
  /**
   * @formulario subtemaForm: Formulario que captura los datos ingresados por el front
   */
  subtemaForm: FormGroup = new FormGroup({
    idNota: new FormControl(0, [Validators.required]),
    idSubtema: new FormControl('', [Validators.required]),
    subtitulo: new FormControl('', [Validators.required]),
  });

  /**
   * @variable nota: contiene la información de la nota, los subtemas y titulos
   */
  nota: NotasConsulta = {} as NotasConsulta;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectNotaSubtemasInformacion)
      .pipe(take(1))
      .subscribe((notaConsultaSelect: NotasConsulta) => {
        this.nota = notaConsultaSelect;
        this.subtemaForm.patchValue({ idNota: notaConsultaSelect.id });
      });
  }

  guardarSubtitulo(): void {
    console.log(this.subtemaForm.value);
  }
}
