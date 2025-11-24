import { MaterialCatequesis } from "./11_herencia_mp";

export class MaterialPesadoCatequesis extends MaterialCatequesis {
    getCapacidadCarga(): void {
        console.log('Material pesado de catequesis');
    }
}

const miMaterialPesado = new MaterialPesadoCatequesis('Editorial San Marcos', 'Caja de materiales');
console.log(miMaterialPesado.marca);
miMaterialPesado.moverse();
miMaterialPesado.getCapacidadCarga();
