export class MaterialCatequesis {
    public marca: string;
    private tipo: string;

    constructor(
        marca: string,
        tipo: string
    ) {
        this.marca = marca;
        this.tipo = tipo;
    }

    moverse(): void {
        console.log('Material de catequesis en uso');
    }
}

export class GuiaCatequista extends MaterialCatequesis {}
