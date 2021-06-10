let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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