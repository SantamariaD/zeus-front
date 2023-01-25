import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
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
   *  @entrada area: Área a la que pertenece la nota
   */
  @Input() area: string = '';

  /**
   *  @entrada subarea: subárea a la que pertenece la nota
   */
  @Input() subarea: string = '';

  /**
   * @entrada ruta: Esta ruta obtiene la imagen que se agrega a la card
   */
  @Input() ruta: string = '';

  /**
   * @entrada creada: Fecha en la que se creo la nota
   */
  @Input() creada: string = '';

  /**
   * @entrada leida: Número de veces leida, dato que se da por los usuarios
   */
  @Input() leida: number = 0;

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

  /**
   *  @variable rutaImagen: Ruta de la imagen que se mostrara en la miniatura de la nota
   *
   */
  rutaImagen: string = '';

  /**
   *  @variable username: Nombre del usuario
   *
   */
  username: string = '';

  /**
   *  @variable fechaFormat: NFecha formateada en la que se creo la nota
   *
   */
  fechaFormat: any = '';

  constructor() {}

  ngOnInit(): void {
    var moments = require('moment-timezone');
    this.rutaImagen = !localStorage.getItem('imagen')
      ? ''
      : './assets/imagenes/user.png';
    this.username = localStorage.getItem('username') as string;
    moment.locale('es-mx');
    const fecha = new Date(this.creada);
    this.fechaFormat = moment(
      moments(fecha).tz('America/Mexico_City')
    ).fromNow();
  }

  clickCard(): void {
    this.notaCard = {
      idNota: this.idNota,
      tema: this.tema,
    };

    this.infoNota.emit(this.notaCard);
  }
}
