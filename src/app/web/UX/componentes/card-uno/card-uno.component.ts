import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-uno',
  templateUrl: './card-uno.component.html',
  styleUrls: ['./card-uno.component.scss'],
})
export class CardUnoComponent implements OnInit {
  /**
   *  @entrada tema: Tema de la nota que se va a mostrar
   */
  @Input() tema: string = 'No hay nota porque este va a ser un titulo muy muy grande pero vamos a probar que todo funcione';

  /**
   *  @entrada nombreArchivo: nombre del archivo ligado a la nota si es que existe, dato no estricto
   */
  @Input() nombreArchivo: string = 'No hay archivo';

  /**
   *  @entrada tipoArchivo: Esta variable muestra un icono dependiendo el tipo de archivo en caso de existir:
   *                        * PDF * DOC * XML * TXT * PPTX * JPG, JPEG, TIFF, GIG, PNG
   */
   @Input() tipoArchivo: string = 'nada';

  constructor() {}

  ngOnInit(): void {}
}
