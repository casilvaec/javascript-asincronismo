//Resolviendo el reto con promesas aplicando async/await
//llamamos fetchData
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

//función asíncrona en la quet trabajamos con async - await
const anotherFunction = async (url_api) => {
  try{
    //primera petición
    const data = await fetchData(url_api);
    //segunda petición
    const character = await fetchData(`${API}${data.results[0].id}`);
    //tercera petición
    const origin = await fetchData(character.origin.url);

    //imprimimos el número de personajes
    console.log(data.info.count);
    //imprimimos el nombre del personaje que queremos
    console.log(character.name);
    //imprimimos la dimensión
    console.log(origin.dimension);
  }catch(error){
    console.error(error);
  }
}

console.log('Before');
anotherFunction(API);
console.log('After');

