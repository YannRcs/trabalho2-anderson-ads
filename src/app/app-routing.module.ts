import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {AcessorioListComponent} from './acessorio/acessorio-list.component';
import {VeiculoListComponent} from './veiculo/veiculo-list.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'acessorio', component: AcessorioListComponent},
  {path: 'veiculo', component: VeiculoListComponent},
  {path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
