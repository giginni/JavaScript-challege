
const readline = require('readline');

async function classroomManagement() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

function getUserNumber() {
  return new Promise((resolve, reject) => {
    rl.question('Presione un número del 1 al 15 para ejecutar el enunciado deseado o 0 para salir: ', function(num) {
      rl.pause();
      const parsedNumber = parseInt(num)
      resolve(parsedNumber);
    })
  });
}
let selectedNumber = 1
while(selectedNumber > 0 && selectedNumber < 16) {
  //async function selectNumber(){
    selectedNumber = await getUserNumber();
    switch (selectedNumber) {
      case 1:
        console.log("Students: ")
        console.table(students);
        break;
      case 2:
        console.log("Students quantity: ", students.length);
        break
    
      default:
        break;
    }
    console.log(selectedNumber)
  //}
  //selectNumber()
};
};

function init () {
  console.log(`1- Mostrar en formato de tabla todos los alumnos\n
2- Mostrar por consola la cantidad de alumnos que hay en clase\n
3- Mostrar por consola todos los nombres de los alumnos\n
4- Eliminar el último alumno de la clase\n
5- Eliminar un alumno aleatoriamente de la clase\n
6- Mostrar por consola todos los datos de los alumnos que son chicas.\n
7- Mostrar por consola el número de chicos y chicas que hay en la clase.\n
8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.\n
9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.\n
10- Añadir un alumno nuevo con los siguientes datos:\n
---nombre aleatorio.\n
---edad aleatoria entre 20 y 50 años.\n
---género aleatorio.\n
---listado de calificaciones vacío.\n
11- Mostrar por consola el nombre de la persona más joven de la clase.\n
12- Mostrar por consola la edad media de todos los alumnos de la clase.\n
13- Mostrar por consola la edad media de las chicas de la clase.\n
14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.\n
15- Ordenar el array de alumnos alfabéticamente según su nombre.`)
  
  classroomManagement()
}

init()


const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

//________________________________________________________________________________________

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function genderQuantity(gender = '') {
  const quantity = students.filter(student => student['gender'] === gender).length
  return quantity
}

//________________________________________________________________________________________

//1 - Mostrar en formato de tabla todos los alumnos.
console.table(students);

 //2 - Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(students.length);

//3 - Mostrar por consola todos los nombres de los alumnos.
  for (let i=0; i< students.length; i++){
    console.log(students[i].name);
  }
  
  //4 - Eliminar el último alumno de la clase.
  console.log(students.pop());
  

//5 - Eliminar un alumno aleatoriamente de la clase.
let alumnIndexToDelete = calculateRandomNumber(0, (students.length -1));
students.splice(alumnIndexToDelete, 1);
console.log(students);

/*let alumnToDelete = Math.floor(Math.random() * (students.length -1));
students.splice(alumnToDelete, 1);

console.log(students);
*/

//6 - Mostrar por consola todos los datos de los alumnos que son chicas.
/*
for (let i=0; i < students.length; i++) {
  if (students[i].gender === 'female') {
    console.log(students[i]);
  } 
}
*/
console.log(students
  .filter(student => student['gender'] === 'female'));

//7 Mostrar por consola el número de chicos y chicas que hay en la clase.

const femNum = genderQuantity('female');
console.log(femNum);

const maleNum = genderQuantity('male');
console.log(maleNum);

//8 - Mostrar true o false por consola si todos los alumnos de la clase son chicas.
console.log(students.every(student => student['gender'] === 'female'));

//9 - Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años
students.forEach(student => (student['age'] > 19 && student['age'] < 26) ? console.log(student['name']) : null);

//10 - Añadir un alumno nuevo con los siguientes datos: nombre aleatorio.
//---edad aleatoria entre 20 y 50 años.
//---género aleatorio.
//---listado de calificaciones vacío.

students.push({});
