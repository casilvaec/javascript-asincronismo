const somethingWillHappen = () => {
  //sintaxis de la promesa
  return new Promise((resolve, reject) => {
    //validamos la condición
    if (true){
      resolve ('Todo ok');
    }else{
      reject('Algo falló');
    }
  });
};

//ejecutamos la promesa
somethingWillHappen()
  //si es true hacer esto
  .then(response => console.log(response))
  //En caso de algún fallo, mostramos el error
  .catch(err => console.error(err));


//construimos otra promesa con arrow functions
const somethingWillHappen2 = () => {
  //La promesa debe ir en mayuscula que es una palabra reservada sino genera error
  return new Promise ((resolve, reject) => {
    if (true){
      setTimeout (() => {
        resolve('True');
      }, 2000)
    }else {
      const error = new Error('Algo salió mal');
      reject(error);
    }

  });
}

//ejecutamos la promesa
somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));


//Como correr varias promesas al mismo tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err);
  })
  

