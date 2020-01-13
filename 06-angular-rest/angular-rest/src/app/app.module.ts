import { BrowserModule } from '@angular/platform-browser';
import {Input, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {ButtonModule, InputTextModule, TableModule} from "primeng";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    MatInputModule,
    InputTextModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UsuarioRestService,
  ], // servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
