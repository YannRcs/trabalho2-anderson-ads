import {Component, Injector, OnInit} from '@angular/core';
import {BaseFormDirective} from '../base/base-form.directive';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  template: `
    <p-card [style]="{width: '350px'}" header="Login">
      <form [formGroup]="form">
        <div class="container">
          <div class="row">
            <div class="col-12 mt-3">
              <div class="form-group">
                <label for="usuario">Usuário:</label>
                <input [(ngModel)]="usuario"
                       formControlName="usuario"
                       id="usuario"
                       pInputText>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="senha">Senha:</label>
                <input [(ngModel)]="senha"
                       formControlName="senha"
                       id="senha"
                       pInputText
                       type="password">
              </div>
            </div>
          </div>
          <div class="col-12 text-center mt-3">
            <button (click)="entrar()" color="primary" mat-raised-button>Entrar</button>
          </div>
        </div>
      </form>
    </p-card>
  `,
  styles: [`
    button {
      width: 75%;
    }
  `],
})
export class LoginComponent extends BaseFormDirective<void> implements OnInit {

  usuario: string;
  senha: string;

  constructor(public injector: Injector,
              private router: Router,
              private messageService: MessageService) {
    super(injector);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });
  }

  entrar(): void {
    if (this.form.valid) {

      for (const u of UsuariosCadastrados) {
        if (u.usuario === this.usuario && u.senha === this.senha) {
          this.router.navigateByUrl('inicio')
            .then(() => localStorage.setItem('usuario_logado', u.usuario));
          return;
        }
      }
      this.messageService.add({severity: 'error',
        detail: 'Usuário ou senha incorretos.'});
    } else {
      this.validaForm();
    }
  }
}

export const UsuariosCadastrados = [
  {usuario: 'joao@gmail.com', senha: '123456'},
  {usuario: 'carlos@gmail.com', senha: '54321'},
  {usuario: 'maria@hotmail.com', senha: '987654'},
];
