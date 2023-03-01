import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
/*
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked

*/



@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destruir</button>
  -->

  <!-- 
  <app-diretivas-estruturais></app-diretivas-estruturais>
   -->

   <!--
  <app-diretivas-atributos>
    <h1>Aulas de Diretivas de Atributo</h1>
    <h3>Aula Final</h3>
  </app-diretivas-atributos>
   
  <app-diretivas-atributos>
    <h1>Filipe</h1>
    <h3>estela</h3>
  </app-diretivas-atributos>
  -->

  <!-- <app-diretivas-atributos></app-diretivas-atributos> -->

  <!--<app-new-component></app-new-component>  --> 
  
  <!--
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button> --> 

  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>

  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  public addValue: number = 0;

  public getDados: { nome: string, idade: number } | undefined;

  constructor() { }


  ngOnInit(): void { }


  public add() {
    this.addValue += 1
  }

  public destruirComponent() {
    this.destruir = false;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }

}
