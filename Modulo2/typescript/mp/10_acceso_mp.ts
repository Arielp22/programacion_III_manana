import { RegistroSacramento } from "./09_acceso_mp";

const myRegistro: RegistroSacramento = new RegistroSacramento('Curso de Confirmacion');
console.log(myRegistro.titulo);
console.log(myRegistro.getCota());
console.log(myRegistro.getAtributes());
