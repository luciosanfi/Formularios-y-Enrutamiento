import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ErrorComponent } from './error/error.component';
import { JefeComponent } from './jefe/jefe.component';
import { CochesComponent } from './coches/coches.component';


const appRoutes: Routes = [
  {path: "", component: EmpleadoComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'jefe', component: JefeComponent},
  {path: 'coches', component: CochesComponent},
  {path: "**", component: ErrorComponent}
];
export const appRoutingProviders: any [] = [];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule], 
})
export class AppRoutingModule { }
