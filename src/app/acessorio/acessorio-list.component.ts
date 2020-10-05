import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {throttle} from '../decorators/throttle';
import {BaseListComponent} from '../base/base-list.component';
import {Acessorio} from './acessorio';
import {AcessorioFormComponent} from './acessorio-form.component';

@Component({
  moduleId: module.id,
  selector: 'app-acessorio-list',
  templateUrl: './acessorio-list.component.html',
})
export class AcessorioListComponent extends BaseListComponent<Acessorio> implements OnInit {

  @ViewChild(AcessorioFormComponent, {static: false}) formComponent: AcessorioFormComponent;

  constructor(public injector: Injector) {
    super(injector, 'acessorios');
  }

  ngOnInit(): void {
    this.carregaLista();
  }

  adicionar(): void {
    this.indexEditando = null;
    this.formComponent.abrir();
  }

  editar(rowData: Acessorio): void {
    this.indexEditando = this.lista.findIndex(e => e === rowData);
    this.formComponent.abrir(rowData);
  }

  @throttle()
  filtrar(): void {
    this.listaFiltrada = null;
    if (this.filtro.length > 0) {
      this.listaFiltrada = this.lista
        .filter(e => Acessorio.toStringValues(e).includes(this.filtro));
    }
  }
}
