import {FormGroup} from '@angular/forms';

export abstract class BaseFormComponent {

  public form: FormGroup;

  constructor() {
  }

  validaForm(form?: FormGroup): void {
    if (form == null) {
      form = this.form;
    }
    for (const c in form.controls) {
      if (this.form.controls[c]) {
        this.form.controls[c].markAsDirty();
        this.form.controls[c].markAsTouched();
        this.form.controls[c].updateValueAndValidity();
      }
    }
  }
}
