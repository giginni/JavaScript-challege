
const readline = require('readline');
//________________________________________________________________________________________

function calculateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genderQuantity(gender = '') {
  return students.filter(student => student['gender'] === gender).length;
}

function getAverage(values = []) {
  return values.reduce((accum, currentValue) => accum += currentValue, 0) / values.length;
}

//________________________________________________________________________________________

const students = [
  {
    age: 25,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
//__________________________________________________________________________________________

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
    selectedNumber = await getUserNumber();
    switch (selectedNumber) {
      case 1: //Mostrar en formato de tabla todos los alumnos
        console.log("Listado de alumnos: ")
        console.table(students);
        break;

      case 2: //Mostrar por consola la cantidad de alumnos que hay en clase.
        console.log("Cantidad de alumnos: ", students.length);
        break;

      case 3: //Mostrar por consola todos los nombres de los alumnos.
        console.log("Los alumnos son: ")
        for (let i=0; i< students.length; i++){
          console.log(students[i].name);
        }
        break;

      case 4: //Eliminar el último alumno de la clase
        students.pop();
        console.log('El ultimo alumno ha sido eliminado.')
        break;

      case 5: //Eliminar un alumno aleatoriamente de la clase
        let alumnIndexToDelete = calculateRandomNumber(0, (students.length -1));
        students.splice(alumnIndexToDelete, 1);
        console.log('Un alumno ha sido eliminado.')
        break

      case 6: //Mostrar por consola todos los datos de los alumnos que son chicas.\n
        const femAlumns = students.filter(student => student['gender'] === 'female');
        console.log('Las alumnas son:', femAlumns);
        break

      case 7: //Mostrar por consola el número de chicos y chicas que hay en la clase.
        const femNum = genderQuantity('female');
        const maleNum = genderQuantity('male');
        console.log('Hay', maleNum, 'chicos y', femNum, 'chica/s en la clase.');
        break

      case 8: //Mostrar true o false por consola si todos los alumnos de la clase son chicas.
        console.log(students.every(student => student['gender'] === 'female'));
        break

      case 9: //Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
        students.forEach(student => (student['age'] > 19 && student['age'] < 26) ? console.log(student['name']) : null);
        break

      case 10: //Añadir un alumno nuevo
        const studentsNames = [...availableFemaleNames, ...availableMaleNames];
        const namesIndex = calculateRandomNumber(0, (studentsNames.length -1));
        const randomName = studentsNames[namesIndex]
        const randomAge = calculateRandomNumber(20, 50);
        const randomGender = availableFemaleNames.includes(randomName) ? 'female' : 'male';
        const examScores = [];

        students.push({
          age: randomAge, 
          examScores,
          gender: randomGender,
          name: randomName
        });
        console.table(students);
        break 

      case 11: //Mostrar por consola el nombre de la persona más joven de la clase.
        const youngestStudent = students.reduce((num1, num2) => num1.age < num2.age ? num1 : num2);
        console.log('La persona más joven es', youngestStudent.name)
        break

      case 12: //Mostrar por consola la edad media de todos los alumnos de la clase.
        let studentsAges = []
        students.forEach(student => {
          studentsAges.push(student.age);
        });
        const meanAverage = Math.round(getAverage(studentsAges));
        console.log('La edad promedio de todos los alumnos es:', meanAverage);
        break

      case 13: //Mostrar por consola la edad media de las chicas de la clase.
        const femStudents = students.filter(student => student['gender'] === 'female');
        const femStudentsAges = []
        femStudents.forEach(student => {
          femStudentsAges.push(student.age);
        });
        const meanFemAverage = Math.round(getAverage(femStudentsAges));
        console.log('La edad promedio de las chicas es:', meanFemAverage);
        break

      case 14: //Añadir nueva nota a los alumnos. Por cada alumno de la clase, 
      //tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
        students.forEach(students => {
          students.examScores.push(calculateRandomNumber(0, 10));
        });
        console.log(students);
        break

      case 15: //Ordenar el array de alumnos alfabéticamente según su nombre.
        students.sort((studentA, studentB) => {
          const nameA = studentA.name.toUpperCase(); 
          const nameB = studentB.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        console.table(students);
        break

      default:
        if (selectedNumber !== 0){
        console.log("Opción inválida.")
        };
        break;
    }
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
11- Mostrar por consola el nombre de la persona más joven de la clase.\n
12- Mostrar por consola la edad media de todos los alumnos de la clase.\n
13- Mostrar por consola la edad media de las chicas de la clase.\n
14- Añadir nueva nota a los alumnos.\n
15- Ordenar el array de alumnos alfabéticamente según su nombre.\n`)
  
  classroomManagement()
}

init()