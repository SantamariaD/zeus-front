import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { GeneradorNotas } from 'src/app/web/informacion/interface/notas';
import { ConsultaSubtemasNota } from 'src/app/web/informacion/interface/subtemas';
import { SubtemasService } from 'src/app/web/informacion/servicios/subtemas/subtemas.service';
import { selectNotaSubtemasInformacion } from 'src/app/web/informacion/state';

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.scss'],
})
export class VerNotaComponent implements OnInit {
  /**
   * @Variable nota: Información de la nota y los subtemas relacionados a está
   */
  nota: ConsultaSubtemasNota = {} as ConsultaSubtemasNota;

  /**
   * @Variable editorMostrar: Muestra el editor de texto si el campo subtema esta lleno 
   */
  editorMostrar = false;

  /**
   * @Formulario subtemaForm: Contiene la información del subtema que se envíara al back
   */
  subtemaForm: FormGroup = new FormGroup({
    subtema: new FormControl('', [Validators.required]),
    base64: new FormControl(''),
    html: new FormControl(''),
    idNota: new FormControl(''),
  });

  constructor(private store: Store, private subtemasService: SubtemasService) {}

  ngOnInit(): void {
    this.store
      .select(selectNotaSubtemasInformacion)
      .pipe(take(1))
      .subscribe((nota: ConsultaSubtemasNota) => (this.nota = nota));
  }

  // Método para guardar el subtema en la base
  guardarSubtema(texto: GeneradorNotas): void {
    // Seteo de valores deñ formulario
    this.subtemaForm.patchValue({
      base64: texto.base64,
      html: texto.html,
      idNota: this.nota.nota.id,
    });

    this.subtemasService
      .guardarSubtema(this.subtemaForm.value)
      .subscribe(() => {
        // Actualización de los subtemas, reset de formulario e ir hasta arriba
        this.nota.subtemas.push({
          base64: this.subtemaForm.value.base65,
          html: this.subtemaForm.value.html,
          idNota: this.subtemaForm.value.idNota,
          subtema: this.subtemaForm.value.subtema,
        });
        this.subtemaForm.reset();
        window.scroll({ 
          top: 0, 
          left: 0
        });
        this.editorMostrar = false;
      });
  }

  // Método para mostrar el editor de texto
  habilitarEditor(): void {
    this.editorMostrar = this.subtemaForm.value.subtema ? true : false;
  }
}
