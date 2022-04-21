import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SymbolsModule } from '@dynamic-devs/symbol-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SymbolsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
