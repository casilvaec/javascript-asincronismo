//Resolviendo el challenge ahora con promesas
//llamamos a fetchData
const fetchData = require('../utils/fetchData');

//Seteamos la url de la API
const API = 'https://rickandmortyapi.com/api/character/';

//resolviendo las peticiones
fetchData(API)
  .then(data=>{
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
  })

  .then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
  })

  .then(data => {
    console.log(data.dimension)
  })

  .catch(err => console.error(err));
