import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Filipe Cajado', idade: 22 },
    { nome: 'Estela Fiorotti', idade: 19 },
    { nome: 'Alex sandro', idade: 50 }
  ]

  constructor() { }

  ngOnInit(): void { }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
