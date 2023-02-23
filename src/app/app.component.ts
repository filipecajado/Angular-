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
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  constructor() { }


  ngOnInit(): void { }


}
