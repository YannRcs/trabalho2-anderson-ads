import {FormBuilder, FormGroup} from '@angular/forms';
import {Directive, EventEmitter, Injector, Output} from '@angular/core';

@Directive()
export abstract class BaseFormDirective<T> {

  form: FormGroup;
  objeto = {} as T;
  displayForm = false;
  editando = false;
  protected fb: FormBuilder;

  @Output() addEvent = new EventEmitter<T>();

  constructor(public injector: Injector) {
    this.fb = injector.get(FormBuilder);
  }

  validaForm(): void {
    for (const c in this.form.controls) {
      if (this.form.controls[c] != null) {
        this.form.controls[c].markAsDirty();
        this.form.controls[c].markAsTouched();
        this.form.controls[c].updateValueAndValidity();
      }
    }
  }

  resetForm(): void {
    this.objeto = {} as T;
    this.displayForm = false;
    this.form.reset();
  }

  salvar(): void {
    if (this.form.valid) {
      this.addEvent.emit(this.objeto);
      this.resetForm();
    } else {
      this.validaForm();
    }
  }

  abrir(objeto?: T): void {
    if (objeto) {
      this.objeto = JSON.parse(JSON.stringify(objeto));
      this.editando = true;
    } else {
      this.editando = false;
    }
    this.displayForm = true;
  }
}
