//primera función que suma valores
function sum (num1, num2){
  return num1 + num2;
}

//segunda función que implementa callback
function calculator(num1, num2, callback){
  return callback(num1,num2);
}

//ejecutamos
console.log(calculator(6, 2, sum ));


//ejemplo con fechas
function date(callback){
  console.log(new Date);
  setTimeout(function() {
    let date = new Date;
    callback(date);
  }, 3000)
}

//segunda función que va a imprimir dichos valores
function printDate(dateNow){
  console.log(dateNow);
}

//ejecutamos
date(printDate);
