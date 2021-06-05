import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Route, Router } from '@angular/router'

import { AppComponent } from './appcomponent/app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component'

import { DataService } from './data.service'


//array de las rutas que podra tener la app
const routes: Route[] =  [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  //Servicios
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
