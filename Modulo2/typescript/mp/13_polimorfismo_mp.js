"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialPesadoCatequesis = void 0;
var _11_herencia_mp_1 = require("./11_herencia_mp");
var MaterialPesadoCatequesis = /** @class */ (function (_super) {
    __extends(MaterialPesadoCatequesis, _super);
    function MaterialPesadoCatequesis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialPesadoCatequesis.prototype.getCapacidadCarga = function () {
        console.log('Material pesado de catequesis');
    };
    return MaterialPesadoCatequesis;
}(_11_herencia_mp_1.MaterialCatequesis));
exports.MaterialPesadoCatequesis = MaterialPesadoCatequesis;
var miMaterialPesado = new MaterialPesadoCatequesis('Editorial San Marcos', 'Caja de materiales');
console.log(miMaterialPesado.marca);
miMaterialPesado.moverse();
miMaterialPesado.getCapacidadCarga();
