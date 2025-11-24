import { MaterialCatequesis, GuiaCatequista } from "./11_herencia_mp";

const miMaterial = new MaterialCatequesis('Editorial San Juan', 'Libro de estudio');
console.log(miMaterial.marca);
// console.log(miMaterial.tipo); // tipo es privado y no se puede acceder
miMaterial.moverse();

const miGuia = new GuiaCatequista('Editorial Nazaret', 'Guia para catequistas');
console.log(miGuia.marca);
// console.log(miGuia.tipo); // tipo es privado
miGuia.moverse();
