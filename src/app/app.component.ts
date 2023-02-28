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

  <app-diretivas-atributos></app-diretivas-atributos>

  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  constructor() { }


  ngOnInit(): void { }

  public destruirComponent() {
    this.destruir = false;
  }



}
