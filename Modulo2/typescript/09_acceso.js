"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libro = void 0;
var libro = /** @class */ (function () {
    function libro(tiyulo) {
        this.idGeneric = '991828982980';
        this.titulo = this.titulo;
        this.generarCota();
    }
    libro.prototype.generarCota = function () {
        this.cota = (new Date()).toDateString();
    };
    libro.prototype.getCota = function () {
        return this.cota;
    };
    libro.prototype.getAtributes = function () {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    };
    return libro;
}());
exports.libro = libro;
