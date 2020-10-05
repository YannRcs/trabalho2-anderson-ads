import {ConfirmationService, MessageService} from 'primeng/api';
import {Injector} from '@angular/core';

export abstract class BaseListComponent<T> {

  lista: T[] = [];
  listaFiltrada: T[] = null;
  indexEditando: number = null;
  filtro = '';
  protected messageService: MessageService;
  protected confirmationService: ConfirmationService;

  protected constructor(public injector: Injector,
                        public localStorageKey: string) {
    this.messageService = injector.get(MessageService);
    this.confirmationService = injector.get(ConfirmationService);
  }

  carregaLista(): void {
    const jsonLista = localStorage.getItem(this.localStorageKey);
    if (jsonLista != null) {
      this.lista = JSON.parse(jsonLista);
    }
  }

  salvar(event: T): void {
    this.indexEditando != null
      ? this.lista[this.indexEditando] = event
      : this.lista.push(event);

    localStorage.setItem(this.localStorageKey, JSON.stringify(this.lista));
    this.messageService.add({severity: 'success', detail: 'Registro salvo.'});
    this.filtrar();
  }

  deletar(rowData: T): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja remover?',
      accept: () => {
        this.lista = this.lista.filter(e => e !== rowData);
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.lista));
        this.messageService.add({severity: 'success', detail: 'Registro removido.'});
      }
    });
  }

  filtrar(): void {
  }
}
