import {Component, ViewChild} from '@angular/core';
import {Veiculo} from './veiculo';
import {VeiculoFormComponent} from './veiculo-form.component';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
})
export class VeiculoListComponent {

  @ViewChild(VeiculoFormComponent, {static: false}) formComponent: VeiculoFormComponent;

  lista: Veiculo[] = [
    {id: 1, modelo: 'Corsa', cor: 'branco', anoFabricacao: 2012, placa: 'AIOP-123', valor: 24000},
  ];

  constructor() {
  }

  novo(): void {
    this.formComponent.displayForm = true;
  }
}
