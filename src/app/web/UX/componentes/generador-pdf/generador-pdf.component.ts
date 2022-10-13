import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-generador-pdf',
  templateUrl: './generador-pdf.component.html',
  styleUrls: ['./generador-pdf.component.scss']
})
export class GeneradorPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crearPdf(): void {
    const pdfContent = {
      content: [
        {
          text: 'Mi primer PDF en angular'
        },
        {
          text: 'A dos lineas'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfContent);
    pdf.open();
  }

}
