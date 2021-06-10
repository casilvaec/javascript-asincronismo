//Transformamos la function utilizada en callback con emacscript 6

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//trayendo la información de la API
const fetchData=(url_api) =>{
  return new Promise((resolve, reject) =>{
    //generando la referencia al objeto que se necesita
    const xhttp = new XMLHttpRequest();

    //Haciendo llamado a una url
    //Con true activamos el asincronismo dentro de XMLHttpRequest
    xhttp.open('GET', url_api, true);

    //escuchando lo que genera la conexión
    xhttp.onreadystatechange = (() => {

      //haciendo validación para ejecutar el callback
      //Hay cinco estados posibles 0-4 con el 4 sabemos que todo ok -(se ha completado)

      if(xhttp.readyState === 4){

        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error '+ url_api))

      }
    });
  //enviando la solicitud
  xhttp.send();
  });  
}

//Como estamos utilizando node invocamos module.export
module.exports = fetchData;
