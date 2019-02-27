import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgAFAutomaticFormsModule} from '../../projects/ngx-automatic-forms/src/lib/ngaf-automatic-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAFAutomaticFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
