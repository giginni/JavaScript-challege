function numAleatorio(min, max) {
    let alea = parseInt((Math.random() * max) + min);
    return alea;
  }
  
  const minimo=1;
  const maximo=100;
  const numSecreto= numAleatorio(minimo, maximo);
  let intento=0;
  let flag=false;
  let numero=0;
  console.log('Menú');
  console.log('1. JUGAR SOLO');
  console.log('2. JUGAR CON LA MÁQUINA');
  console.log('3. NO JUGAR');
  let opcion=prompt('ingese su opción: ');
  
  
  switch (opcion){
      case "1":
          console.log('Tienes 5 intentos para adivinar mi número secreto');
          do 
          {
              numero=parseInt(prompt('Deme un número entre 1 y 100'),10);
              intento++;
              if (numSecreto==numero){
                  flag=true;
              } else {
                      if (numSecreto>numero) {
                          console.log('Tu número está por debajo del mío');
                      } else {
                          console.log('Tu número está por encima del mío');
                      }
              }
          } while (intento<5 && numSecreto!==numero);
          if (flag) {
              console.log('Felicitaciones, GANASTE!! Encontraste mi número secreto, que es: ',numSecreto);
          } else {
                  console.log('Los siento, Perdiste!! Mi número secreto era: ',numSecreto);
          };
          break;
      case "2":
        
          break;
      case "3":
          console.log('Qué pena!!, nos vemos la próxima')
      break;
    default:
          console.log('Has ingresado un valor inválido, parece que no quieres jugar');
  }