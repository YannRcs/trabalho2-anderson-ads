import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {Veiculo} from './veiculo';
import {VeiculoFormComponent} from './veiculo-form.component';
import {throttle} from '../decorators/throttle';
import {BaseListComponent} from '../base/base-list.component';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
})
export class VeiculoListComponent extends BaseListComponent<Veiculo> implements OnInit {

  @ViewChild(VeiculoFormComponent, {static: false}) formComponent: VeiculoFormComponent;

  constructor(public injector: Injector) {
    super(injector, 'veiculos');
  }

  ngOnInit(): void {
    this.carregaLista();
  }

  adicionar(): void {
    this.indexEditando = null;
    this.formComponent.abrir();
  }

  editar(rowData: Veiculo): void {
    this.indexEditando = this.lista.findIndex(e => e === rowData);
    this.formComponent.abrir(rowData);
  }

  @throttle()
  filtrar(): void {
    this.listaFiltrada = null;
    if (this.filtro.length > 0) {
      this.listaFiltrada = this.lista
        .filter(e => Veiculo.toStringValues(e).includes(this.filtro));
    }
  }
}
