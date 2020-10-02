import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {AcessorioFormComponent} from './acessorio/acessorio-form.component';
import {AcessorioListComponent} from './acessorio/acessorio-list.component';
import {VeiculoFormComponent} from './veiculo/veiculo-form.component';
import {VeiculoListComponent} from './veiculo/veiculo-list.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'acessorio/form', component: AcessorioFormComponent},
  {path: 'acessorio', component: AcessorioListComponent},
  {path: 'veiculo/form', component: VeiculoFormComponent},
  {path: 'veiculo', component: VeiculoListComponent},
  {path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
