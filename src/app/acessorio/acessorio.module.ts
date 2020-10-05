import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AcessorioFormComponent} from './acessorio-form.component';
import {AcessorioListComponent} from './acessorio-list.component';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    CardModule,
    FormsModule,
    InputTextModule,
    MatIconModule,
    MatButtonModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    InputNumberModule,
  ],
  declarations: [
    AcessorioFormComponent,
    AcessorioListComponent,
  ],
  exports: [
    AcessorioFormComponent,
    AcessorioListComponent,
  ],
  providers: [
  ],
})
export class AcessorioModule {
}
