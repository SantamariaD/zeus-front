import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { Nota } from 'src/app/web/informacion/interface/notas';
import { selectNotaInformacion } from 'src/app/web/informacion/state';

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.scss'],
})
export class VerNotaComponent implements OnInit {
  nota: Nota = {} as Nota;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectNotaInformacion)
      .pipe(take(1))
      .subscribe((nota: Nota) => (this.nota = nota));
  }
}
