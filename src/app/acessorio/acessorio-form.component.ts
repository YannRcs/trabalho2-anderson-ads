import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {BaseFormDirective} from '../base/base-form.directive';
import {Acessorio} from './acessorio';

@Component({
  moduleId: module.id,
  selector: 'app-acessorio-form',
  templateUrl: './acessorio-form.component.html',
})
export class AcessorioFormComponent extends BaseFormDirective<Acessorio> implements OnInit {

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      detalhes: new FormControl(''),
    });
  }
}
