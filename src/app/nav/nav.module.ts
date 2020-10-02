import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {SidebarModule} from 'primeng/sidebar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    SidebarModule,
    MatButtonModule,
  ],
  declarations: [
    NavComponent,
  ],
  exports: [
    NavComponent,
  ],
  providers: [],
})
export class NavModule {
}
