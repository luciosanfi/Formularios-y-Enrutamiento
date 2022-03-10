import { Component, OnInit } from '@angular/core';
import { Coche } from './coche.model';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches: Array<Coche>;

  constructor() { 
    this.coche = new Coche("","","");
    this.coches = [new Coche("Reanult","500","rojo")];
  }
  onSubmit(){
    this.coches.push(this.coche);
}

  ngOnInit(): void {
  }

}
