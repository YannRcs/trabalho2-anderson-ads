import {Component, OnInit, ViewChild} from '@angular/core';
import {Veiculo} from './veiculo';
import {VeiculoFormComponent} from './veiculo-form.component';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
})
export class VeiculoListComponent implements OnInit {

  lista: Veiculo[] = [];
  indexEditando: number;

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

  novo(): void {
    this.formComponent.editando = false;
    this.formComponent.displayForm = true;
    this.indexEditando = null;
  }

  adicionar(event: Veiculo): void {
    if (this.indexEditando != null) {
      this.lista[this.indexEditando] = event;
    } else {
      this.lista.push(event);
    }
    localStorage.setItem('veiculos', JSON.stringify(this.lista));
  }

  delete(rowData: Veiculo): void {
    this.lista = this.lista.filter(e => e !== rowData);
    this.messageService.add({severity: 'success', detail: 'Registro removido.'});
  }

  editar(rowData: Veiculo): void {
    this.indexEditando = this.lista.findIndex(e => e === rowData);
    this.formComponent.objeto = JSON.parse(JSON.stringify(rowData));
    this.formComponent.editando = true;
    this.formComponent.displayForm = true;
  }
}
