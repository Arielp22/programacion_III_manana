"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _11_herencia_mp_1 = require("./11_herencia_mp");
var miMaterial = new _11_herencia_mp_1.MaterialCatequesis('Editorial San Juan', 'Libro de estudio');
console.log(miMaterial.marca);
// console.log(miMaterial.tipo); // tipo es privado y no se puede acceder
miMaterial.moverse();
var miGuia = new _11_herencia_mp_1.GuiaCatequista('Editorial Nazaret', 'Guia para catequistas');
console.log(miGuia.marca);
// console.log(miGuia.tipo); // tipo es privado
miGuia.moverse();
