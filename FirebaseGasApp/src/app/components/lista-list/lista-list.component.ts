import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/interfaces/lista.interface';
import { ListaService } from 'src/app/services/lista.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-lista-list',
  templateUrl: './lista-list.component.html',
  styleUrls: ['./lista-list.component.css']
})
export class ListaListComponent implements OnInit {

  lists!: Lista[];

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.getAllLists();
    console.log(this.getAllLists());
  }

  getAllLists(): void {
    this.listaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.lists = data;
    });
  }

}
