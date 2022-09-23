import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {ServicePersonalService} from '../app/Service/service-personal.service';
import {HttpClientModule} from '@angular/common/http';
import { DetallesPersonaComponent } from './Persona/detalles-persona/detalles-persona.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    DetallesPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicePersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
