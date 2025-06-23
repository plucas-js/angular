import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { ExibeMensagem } from './exibe-mensagem/exibe-mensagem';

@NgModule({
  declarations: [
    App,
    ExibeMensagem,
],

imports: [
  BrowserModule,
  AppRoutingModule,
],
providers: [],
bootstrap: [App]
})
export class AppModule { }



