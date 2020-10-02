import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VeiculoFormComponent} from './veiculo-form.component';
import {VeiculoListComponent} from './veiculo-list.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DialogModule} from 'primeng/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule,
    MatIconModule,
    MatButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
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
