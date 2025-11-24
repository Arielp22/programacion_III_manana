"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroSacramento = void 0;
var RegistroSacramento = /** @class */ (function () {
    function RegistroSacramento(titulo) {
        this.idGeneric = '991828982980';
        this.titulo = titulo;
        this.generarCota();
    }
    RegistroSacramento.prototype.generarCota = function () {
        this.cota = (new Date()).toDateString();
    };
    RegistroSacramento.prototype.getCota = function () {
        return this.cota;
    };
    RegistroSacramento.prototype.getAtributes = function () {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    };
    return RegistroSacramento;
}());
exports.RegistroSacramento = RegistroSacramento;
