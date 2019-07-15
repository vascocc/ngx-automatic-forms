import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgAFAutomaticFormsModule} from '../../projects/ngx-automatic-forms/src/lib/ngaf-automatic-forms.module';
import {NgAFNativeModule} from '../../projects/ngx-automatic-forms/src/lib/native/ngaf-native.module';
import {NgAFMaterialModule} from '../../projects/ngx-automatic-forms/src/lib/material/ngaf-material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAFAutomaticFormsModule,
    // NgAFNativeModule
    NgAFMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
