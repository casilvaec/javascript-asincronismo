let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Establecemos la url de la API a consultar
let API = 'https://rickandmortyapi.com/api/character/';

//trayendo la información de la API
function fetchData(url_api, callback){

  //generando la referencia al objeto que se necesita
  let xhttp = new XMLHttpRequest();

  //Haciendo llamado a una url
  //Con true activamos el asincronismo dentro de XMLHttpRequest
  xhttp.open('GET', url_api, true);

  //escuchando lo que genera la conexión
  xhttp.onreadystatechange = function (event){

    //haciendo validación para ejecutar el callback
    //Hay cinco estados posibles 0-4 con el 4 sabemos que todo ok -(se ha completado)

    if(xhttp.readyState === 4){

      //ejecutando la siguiente llamada
      //sabiendo el estado en que se encuentra correcta con el valor de 200
      if (xhttp.status === 200){

        //ahora si podemos realizar el callback
        //dentro de node callback usa el siguiente standar:
        //el primer valor es en caso de error
        //el segundo valor es el que se ejecuta si es correcto
        callback(null, JSON.parse(xhttp.responseText));
      }else {

        //Por buena práctica generamos el else
        const error = new Error('Error ' + url_api);
        return callback(error, null);
      }
    }
  }
  //enviando la solicitud
  xhttp.send();
}

//vamos a hacer 3 llamados a la API con callback
//haciendo el llamado a fetchData
fetchData(API, function (error1, data1){

  //obteniendo la primera información
  //Validamos si se produce algún error, caso contrario realizamos la petición
  if(error1) return console.error(error1);

  //haciendo referencia al primer personaje de la API
  fetchData(API + data1.results[0].id, function(error2, data2){

    //Validamos si se produce algún error, caso contrario realizamos la petición
    if(error2) return console.error(error2);

    //tercera llamada
    fetchData(data2.origin.url, function (error3, data3) 
      {
        if (error3) return console.error(error3);

        //imprimiendo los valores obtenidos en consola
        //ver cuántos personajes existen
        console.log(data1.info.count);

        //obteniendo el nombre de un personaje
        console.log(data2.name);

        //obteniendo la dimensión
        console.log(data3.dimension);
    });
  })
})

