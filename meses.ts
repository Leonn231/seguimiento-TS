function mostrarAño(año: number) {
   switch (año) {
       case 2018:
           console.log("2018: Año de nuevos comienzos.");
           break;
       case 2019:
           console.log("2019: Avances y retos globales.");
           break;
       case 2020:
           console.log("2020: Un año marcado por la incertidumbre.");
           break;
       case 2021:
           console.log("2021: Adaptación y resiliencia en tiempos difíciles.");
           break;
       case 2022:
           console.log("2022: Buscando la recuperación y la estabilidad.");
           break;
       case 2023:
           console.log("2023: Explorando nuevas oportunidades.");
           break;
       case 2024:
           console.log("2024: En camino hacia un futuro más prometedor.");
           break;
       default:
           throw new Error("¿De qué año vienes? Este no está en el registro.");
   }
}

// Llamada de la función con el año 2021
mostrarAño(2021);  // Salida: "2021: Adaptación y resiliencia en tiempos difíciles."
