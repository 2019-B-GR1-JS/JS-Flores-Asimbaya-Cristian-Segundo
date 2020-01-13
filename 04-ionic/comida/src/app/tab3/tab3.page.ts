import { Component } from '@angular/core';
import {forEach} from '@angular-devkit/schematics';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario = {
    nombre: '', correo: '', edad: '', password: '', passwordConfirmacion: ''
  };


  constructor() {
  }
  crearUsuario(formulario: NgForm) {
   // console.log(formulario);
  }

  validarPasswordIguales(): boolean {
    if (this.usuario.password === this.usuario.passwordConfirmacion) {
      return true;
    } else {
      return false;
    }
  }
}
