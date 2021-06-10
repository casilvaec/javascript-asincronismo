//construimos una promesa
const doSomethingAsync = () => {
  return new Promise((resolve, reject)=>{
    (true)
      ? setTimeout(()=> resolve('Do Something Async'), 3000)
      : reject(new Error('Algo salió mal'))
  });
}

//ejecutamos la promesa con la sintaxis que se necesita para async y await
const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

//Trabajando con los errores
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  }catch (error){
    console.error(error)
  }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
