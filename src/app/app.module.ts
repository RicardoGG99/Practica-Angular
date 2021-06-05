import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './appcomponent/app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
