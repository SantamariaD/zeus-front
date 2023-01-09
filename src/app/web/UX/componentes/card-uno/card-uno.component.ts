import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotaCard } from 'src/app/web/informacion/interface/notas';

@Component({
  selector: 'app-card-uno',
  templateUrl: './card-uno.component.html',
  styleUrls: ['./card-uno.component.scss'],
})
export class CardUnoComponent implements OnInit {
  /**
   *  @entrada tema: Tema de la nota que se va a mostrar
   */
  @Input() tema: string = 'Sin tema';

  /**
   *  @entrada idNota: id asociado a la nota
   */
  @Input() idNota: number = 0;

  /**
   *  @entrada tipoArchivo: Esta variable muestra un icono dependiendo el tipo de archivo en caso de existir:
   *                        * PDF * DOC * XML * TXT * PPTX * JPG, JPEG, TIFF, GIG, PNG
   */
   @Input() tipoArchivo: string = 'pdf';

   /**
   *  @salida infoNota: Esta variable indica el evento click de la card mandando el objeto NotaCard
   * 
   */
   @Output() infoNota = new EventEmitter<NotaCard>();

   /**
    *  @variable notaCard: Esta variable contiene la información del tema en la card
    * 
    */
   notaCard: NotaCard = {} as NotaCard;

  constructor() {}

  ngOnInit(): void {}

  clickCard(): void {
    this.notaCard = {
      idNota: this.idNota,
      tema: this.tema
    }

    this.infoNota.emit(this.notaCard);
  }
}
