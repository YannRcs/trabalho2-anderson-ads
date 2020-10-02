import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NumbersOnlyDirective} from './numbers-only.directive';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    NumbersOnlyDirective,
  ],
  exports: [
    NumbersOnlyDirective,
  ],
  providers: [],
})
export class DirectivesModule {
}
