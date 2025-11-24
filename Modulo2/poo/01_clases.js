class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log(`${this.brand} ${this.model} está encendido`);
    }
    run(){
        console.log(`${this.brand} ${this.model} está en movimiento`);
    }
    stop(){
        console.log(`${this.brand} ${this.model} está apagado`);
    }  
}

const miCarro = new Car("Toyota", "Corolla");
miCarro.start();
miCarro.run();
miCarro.stop();
console.log(miCarro.brand);
console.log(miCarro.model);
