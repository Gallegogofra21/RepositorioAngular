import { Component, Inject, OnInit } from '@angular/core';
import { ObjetoPerdidoDto } from 'src/app/models/interfaces/objeto-perdido.interface';
import { ObjetoPerdidoService } from 'src/app/services/objeto-perdido.service';


 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  objetoPerdidoNuevo = new ObjetoPerdidoDto();

  constructor(private objetoPerdidoService: ObjetoPerdidoService) { }

  ngOnInit(): void {
  }

  addNewObjetoPerdido() {
    if(this.objetoPerdidoNuevo.name){
      this.objetoPerdidoService.saveObjeto(this.objetoPerdidoNuevo?.name, this.objetoPerdidoNuevo?.descripcion, this.objetoPerdidoNuevo?.categoria, this.objetoPerdidoNuevo?.localizacion, this.objetoPerdidoNuevo)
    }
  }

}
