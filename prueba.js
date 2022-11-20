
/*
1- Mostrar en formato de tabla todos los alumnos.
2- Mostrar por consola la cantidad de alumnos que hay en clase.
3- Mostrar por consola todos los nombres de los alumnos.
4- Eliminar el último alumno de la clase.
5- Eliminar un alumno aleatoriamente de la clase.
6- Mostrar por consola todos los datos de los alumnos que son chicas.
7- Mostrar por consola el número de chicos y chicas que hay en la clase.
8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
10- Añadir un alumno nuevo con los siguientes datos:
*/

/*agrego comentario
*/

let students = [{
    age: 32,
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    gender: 'female',
    name: 'silvia'
  }
];
  
let nombre= prompt('¿Cuál es tu nombre?');
let sexo = prompt('¿Cuál es tu sexo?');
let edad = prompt('¿Cuál es tu edad?');
  
students.push({});
  
students[2].name = nombre
students[2].gender = sexo
students[2].age = edad
  
  
  //1
for (let i=0; i< students.length; i++){
document.write(students[i].name, " ", students[i].gender," ", students[i].age, "<br>");
}
document.write("<br>");

 //2 
console.log(students.length);

//3
  for (let i=0; i< students.length; i++){
    document.write(students[i].name, "<br>");
    }

//4
// delete students[students.length -1];
console.log(students);

// for (let i=0; i< students.length; i++){
//     document.write(students[i].name);
//     }
document.write("<br>");

//5
let x = Math.round(Math.random() * (students.length -1));
//[students.length -1];
document.write(x);

// delete students[x];
for (let i=0; i< students.length; i++){
    console.log(students[i].name, "<br>");
    }
    
document.write("<br>");