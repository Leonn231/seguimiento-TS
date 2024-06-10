function resta(x: number, z: number){
    if (x <= 0 || z <= 0) {
    throw new Error("Los números tienen que ser mayores a 0");
    }
    return x - z;
    }
    const num1 = 12;
    const num2 = 6;
    const resultado = resta(num1, num2);
    console.log(resultado);