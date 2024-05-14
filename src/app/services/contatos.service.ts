import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor() { }

  private _contatos: Contato[] = [
    {
      name: "Fulano de Tal",
      telefone: "81123456789"
    },
    {
      name: "Ciclano de Silva",
      telefone: "81123456789"
    },
    {
      name: "Outro de Rocha",
      telefone: "81123456789"
    },
    {
      name: "Beltrano de Lima",
      telefone: "81123456789"
    }
  ];

  public listar(): Contato[]{
    return this._contatos;
  }
}
