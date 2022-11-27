console.log("Hola");

let data

const obtenerPersonajes = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function obtenerPersonajesThenCatch () {
    fetch("https://rickandmortyapi.com/api/character")
    .then(result => result.json())
    .then(characters => {
        console.log(characters);
        data = characters
    })
    .catch(error => console.log(error))
}



// obtenerPersonajes()
obtenerPersonajesThenCatch()
.then(() => console.log(data))

