import { Component, OnInit } from '@angular/core';
import { CochesService } from '../services/coches.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [CochesService]
})
export class EmpleadoComponent implements OnInit {

  constructor( 
    private _cochesService: CochesService
  ) 
  {}

  ngOnInit(){
    console.log(this._cochesService.metodoServicio());
  }

}
