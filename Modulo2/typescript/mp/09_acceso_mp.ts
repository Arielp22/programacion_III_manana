export class RegistroSacramento {
    public titulo: string;
    private cota: any;
    protected idGeneric: string = '991828982980';

    constructor(titulo: string) {
        this.titulo = titulo;
        this.generarCota();
    }

    generarCota(): void {
        this.cota = (new Date()).toDateString();
    }

    getCota(): any {
        return this.cota;
    }

    getAtributes(): any {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    }
}
