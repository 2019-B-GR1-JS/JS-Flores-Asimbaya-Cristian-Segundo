import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent
  implements OnInit, OnDestroy {

  @Input()
  public titulo:string;

  @Input()
  public suma:number;

  @Input()
  public imagen:string;

  @Input()
  public tam = 200;

  @Input()
  public textoImagen = "200px";

  @Input()  // Atributo Propiedad
  public textoBoton:string;

  @Output() // EVENTO
  public cambioSueldo = new EventEmitter();

  @Input()
  public num1=0

  @Input()
  public num2=0

  constructor() {
    console.log('Instanciando');
  } // instancia la clase (Ayuda -> Angular)

  ngOnInit(): void { // La clase está lista
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy(): void { // La clase esta destruida
  }

  saludar(){
    alert("HOLAAAAAAAAAAAAAAA");
  }

  aumentarSueldo(){
    // this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    // this.textoBoton = (+this.textoBoton + 1).toString();
    this.tam = this.tam + 100;
  }


  funcion1($event: KeyboardEvent) {

    console.log($event);
    const num1 = $event.srcElement as any;
    console.log(num1.value);
    this.num1 = Number(num1.value);

    console.log("numero 1: "+this.num1)


  }

  funcion2($event: KeyboardEvent) {
    console.log($event);
    const num1 = $event.srcElement as any;
    console.log(num1.value);
    this.num2 = Number(num1.value);
    //this.suma = $event.
  }
}


// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye
