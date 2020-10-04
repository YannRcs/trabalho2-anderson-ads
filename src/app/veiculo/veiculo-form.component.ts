import {Component, Injector, OnInit} from '@angular/core';
import {BaseFormDirective} from '../base/base-form.directive';
import {FormControl, Validators} from '@angular/forms';
import {Veiculo} from './veiculo';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
})
export class VeiculoFormComponent extends BaseFormDirective<Veiculo> implements OnInit {

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      modelo: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      anoFabricacao: new FormControl('', Validators.required),
      placa: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required),
    });
  }
}
