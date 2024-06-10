// Definición del tipo Vehículo
type Vehículo = {
    marca: string;
    eléctrico: boolean;
} | {
    tienePedales: boolean;
    tieneMotor: boolean;
};

// Creación de una variable de tipo Vehículo como un carro
let miVehículo: Vehículo = { marca: "Toyota", eléctrico: false };

// Reasignación de la variable para que represente una bicicleta
miVehículo = { tienePedales: true, tieneMotor: false };
