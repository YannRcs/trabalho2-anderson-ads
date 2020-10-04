import {Component, OnInit, ViewChild} from '@angular/core';
import {Veiculo} from './veiculo';
import {VeiculoFormComponent} from './veiculo-form.component';
import {MessageService} from 'primeng/api';
import {throttle} from '../decorators/throttle';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
})
export class VeiculoListComponent implements OnInit {

  lista: Veiculo[] = [];
  listaFiltrada: Veiculo[] = [];
  indexEditando: number = null;
  filtro = '';

  @ViewChild(VeiculoFormComponent, {static: false}) formComponent: VeiculoFormComponent;

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.carregaLista();
  }

  carregaLista(): void {
    const jsonVeiculos = localStorage.getItem('veiculos');
    if (jsonVeiculos != null) {
      this.lista = JSON.parse(jsonVeiculos);
    }
  }

  adicionar(): void {
    this.formComponent.abrir();
    this.indexEditando = null;
  }

  salvar(event: Veiculo): void {
    this.indexEditando != null
      ? this.lista[this.indexEditando] = event
      : this.lista.push(event);

    localStorage.setItem('veiculos', JSON.stringify(this.lista));
    this.messageService.add({severity: 'success', detail: 'Registro salvo.'});
    this.filtrar();
  }

  deletar(rowData: Veiculo): void {
    this.lista = this.lista.filter(e => e !== rowData);
    localStorage.setItem('veiculos', JSON.stringify(this.lista));
    this.messageService.add({severity: 'success', detail: 'Registro removido.'});
  }

  editar(rowData: Veiculo): void {
    this.indexEditando = this.lista.findIndex(e => e === rowData);
    this.formComponent.abrir(rowData);
  }

  @throttle()
  filtrar(): void {
    this.listaFiltrada = this.lista.filter(e => Veiculo.toStringValues(e).includes(this.filtro));
  }
}
