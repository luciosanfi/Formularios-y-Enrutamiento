import { Injectable } from "@angular/core";

@Injectable()
export class CochesService{
    public coche = "fiat punto";
    metodoServicio(){
        return this.coche;
    }

}