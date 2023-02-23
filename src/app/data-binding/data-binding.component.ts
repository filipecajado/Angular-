import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = 'Filipe';
  public idade: number = 42;
  public maisUm: number = this.idade + 1;

  public checkedDisabled: boolean = false
  public imgSrc: string = 'https://images.pexels.com/photos/34490/keyboard-computer-keys-white.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  public imgTitle: string = 'Property binding'


  public position: { x: number, y: number } = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {

    this.position.x = valor.offsetX
    this.position.y = valor.offsetY


  }
}
