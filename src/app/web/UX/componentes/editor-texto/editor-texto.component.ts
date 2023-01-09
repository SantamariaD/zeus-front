import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { GeneradorNotas } from 'src/app/web/informacion/interface/notas';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
var htmlToPdfmake = require('html-to-pdfmake');

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.scss'],
})
export class EditorTextoComponent implements OnInit {
  /**
   * @Entrada html: está variable contiene el html correspondiente al contenido del subtema:
   *                texto, imagenes, hiperviculos, etc.
   */
  @Input() html: string = '';

  /**
   * @Salida infoPDF: Variable que contiene la información del subtema en formato de html y pdf
   */
  @Output() infoPDF = new EventEmitter<GeneradorNotas>();

  /**
   * @Variable formText: Guarda el contenido del subtema en formato html
   */
  formText: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.formText.setValue(this.html);
  }

  // Método para generar PDF
  generarPdf(): void {
    // Creación del PDF
    const pdfHtml = htmlToPdfmake(this.formText.value);
    const pdf = pdfMake.createPdf({ content: pdfHtml });

    // Emite datos hacia el padre
    let informacion: GeneradorNotas = {
      base64: '',
      html: this.formText.value,
    };

    pdf.getBase64((data) => {
      informacion.base64 = data;
      this.infoPDF.emit(informacion);
    });

    // Se abre el PDF en otra ventana
    pdf.open();

    this.formText.reset();
  }

  // Método para visualizar el PDF sin guardarlo
  abrirPdf(): void {
    // Creación del PDF
    const pdfHtml = htmlToPdfmake(this.formText.value);
    const pdf = pdfMake.createPdf({ content: pdfHtml });

    // Se abre el PDF en otra ventana
    pdf.open();
  }
}
