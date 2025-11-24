"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteSacramento = void 0;
var EstudianteSacramento = /** @class */ (function () {
    function EstudianteSacramento(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    EstudianteSacramento.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " anos. Estoy inscrito en un curso sacramental."));
    };
    return EstudianteSacramento;
}());
exports.EstudianteSacramento = EstudianteSacramento;
