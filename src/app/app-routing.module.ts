import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CompetidoresComponent } from './pages/competidores/competidores.component';


const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'competidores', component: CompetidoresComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
