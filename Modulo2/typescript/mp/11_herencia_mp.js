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
exports.GuiaCatequista = exports.MaterialCatequesis = void 0;
var MaterialCatequesis = /** @class */ (function () {
    function MaterialCatequesis(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }
    MaterialCatequesis.prototype.moverse = function () {
        console.log('Material de catequesis en uso');
    };
    return MaterialCatequesis;
}());
exports.MaterialCatequesis = MaterialCatequesis;
var GuiaCatequista = /** @class */ (function (_super) {
    __extends(GuiaCatequista, _super);
    function GuiaCatequista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GuiaCatequista;
}(MaterialCatequesis));
exports.GuiaCatequista = GuiaCatequista;
