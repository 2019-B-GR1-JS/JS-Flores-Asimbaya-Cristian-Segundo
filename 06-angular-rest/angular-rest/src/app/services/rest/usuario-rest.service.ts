
// Servicio es un SINGLETON
// -> solo va a ver una instancia del servicio.

import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})

export class UsuarioRestService {

  constructor(
    private readonly http: HttpClient  //servicio http
  ){

  }

}
