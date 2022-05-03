import { NgModule } from '@angular/core';
import { DIRECTIVES } from '../generated/directives';
import { defineCustomElements } from '@dynamic-devs/symbol/loader'

defineCustomElements();

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class SymbolsModule {}
