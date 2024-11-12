const calcularPromedioClase = (notas) => {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
};

let cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos hay en el salón?"));

if (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
    console.log("Por favor, ingresa una cantidad válida de alumnos.");
} else {
    let notas = [];
    
    for (let i = 1; i <= cantidadAlumnos; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota del alumno ${i}:`));
        
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            notas.push(nota);
            console.log(`La nota del alumno ${i} es: ${nota}`);
            
            if (nota >= 6) {
                console.log(`El alumno ${i} ha aprobado.`);
            } else {
                console.log(`El alumno ${i} ha reprobado.`);
            }
        } else {
            console.log("Nota inválida, intenta de nuevo.");
            i--; 
        }
    }
    
    let promedioClase = calcularPromedioClase(notas);
console.log(`El promedio de la clase es: ${promedioClase.toFixed(2)}`);
}