import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AcessorioFormComponent} from './acessorio-form.component';
import {AcessorioListComponent} from './acessorio-list.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
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
