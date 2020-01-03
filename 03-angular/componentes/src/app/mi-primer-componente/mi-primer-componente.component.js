var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
export let MiPrimerComponenteComponent = class {
    constructor() {
        this.tam = 200;
        this.textoImagen = "200px";
        this.cambioSueldo = new EventEmitter();
        this.num1 = 0;
        this.num2 = 0;
        console.log('Instanciando');
    } // instancia la clase (Ayuda -> Angular)
    ngOnInit() {
        console.log('Esta listo');
        console.log(this.titulo);
        console.log(this.textoImagen);
        console.log(this.textoBoton);
    }
    ngOnDestroy() {
    }
    saludar() {
        alert("HOLAAAAAAAAAAAAAAA");
    }
    aumentarSueldo() {
        // this.textoBoton = this.textoBoton + 1;
        this.textoBoton = (Number(this.textoBoton) + 1).toString();
        this.cambioSueldo.emit(this.textoBoton);
        // this.textoBoton = (+this.textoBoton + 1).toString();
        this.tam = this.tam + 100;
    }
    funcion1($event) {
        console.log($event);
        const num1 = $event.srcElement, as = any;
        console.log(num1.value);
        this.num1 = Number(num1.value);
        console.log("numero 1: " + this.num1);
    }
    funcion2($event) {
        console.log($event);
        const num1 = $event.srcElement, as = any;
        console.log(num1.value);
        this.num2 = Number(num1.value);
        //this.suma = $event.
    }
};
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "titulo");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "suma");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "imagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "tam");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoImagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoBoton");
__decorate([
    Output()
], MiPrimerComponenteComponent.prototype, "cambioSueldo");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "num1");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "num2");
MiPrimerComponenteComponent = __decorate([
    Component({
        selector: 'app-mi-primer-componente',
        templateUrl: './mi-primer-componente.component.html',
        styleUrls: ['./mi-primer-componente.component.scss']
    })
], MiPrimerComponenteComponent);
// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye
