import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import localeEs from '@angular/common/locales/es'
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomsafePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//registerLocaleData(localeEs);