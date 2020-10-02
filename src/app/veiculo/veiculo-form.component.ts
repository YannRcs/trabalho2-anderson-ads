import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from '../base/base-form.component';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Veiculo} from './veiculo';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
})
export class VeiculoFormComponent extends BaseFormComponent implements OnInit {

  objeto = new Veiculo();
  displayForm = false;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      anoFabricacao: new FormControl('', Validators.required),
      placa: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required),
    });
  }

  onHide(): void {
    this.objeto = new Veiculo();
    this.form.reset();
  }

  salvar(): void {
    if (this.form.valid) {

    } else {
      this.validaForm();
    }
  }
}
