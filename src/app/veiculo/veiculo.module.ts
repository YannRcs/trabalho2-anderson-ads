import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VeiculoFormComponent} from './veiculo-form.component';
import {VeiculoListComponent} from './veiculo-list.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    VeiculoFormComponent,
    VeiculoListComponent,
  ],
  exports: [
    VeiculoFormComponent,
    VeiculoListComponent,
  ],
  providers: [],
})
export class VeiculoModule {
}
