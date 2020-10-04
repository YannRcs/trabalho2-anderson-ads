import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavModule} from './nav/nav.module';
import {LoginModule} from './login/login.module';
import {ToastModule} from 'primeng/toast';
import {InicioComponent} from './inicio/inicio.component';
import {AcessorioModule} from './acessorio/acessorio.module';
import {VeiculoModule} from './veiculo/veiculo.module';
import {MessageService} from 'primeng/api';
import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NavModule,
    LoginModule,
    ToastModule,
    AcessorioModule,
    VeiculoModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
