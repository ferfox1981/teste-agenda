import { ContatosService } from './../../services/contatos.service';
import { Contato } from './../../models/contato';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  constructor(
    private contatosService: ContatosService,
  ){ }

  getContatos(){
    return this.contatosService.listar();
  }
}
