import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor-texto',
  templateUrl: './editor-texto.component.html',
  styleUrls: ['./editor-texto.component.scss']
})
export class EditorTextoComponent implements OnInit {
  ckeditorContent: string = 'Ingresa tu texto';

  constructor() { }

  ngOnInit(): void {
  }

}
