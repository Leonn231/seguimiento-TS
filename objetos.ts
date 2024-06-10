// Objeto de lectura
const libro: {
    readonly titulo: string;
    readonly autor: string;
} = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez"
};

console.log(libro.titulo); // "Cien Años de Soledad"

// Objeto literal convertido a solo lectura con "as const"
const libro2 = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez"
} as const;

// Intentar modificar los valores dará un error
// libro.titulo = "Otro Titulo"; // Error: no se puede asignar a 'titulo' porque es una propiedad de solo lectura
// libro2.autor = "Otro Autor"; // Error: no se puede asignar a 'autor' porque es una propiedad de solo lectura