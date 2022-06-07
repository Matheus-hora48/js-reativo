function somarNumeros(num1){
  return function(num2){
    return function(num3){
      return (num1+ num2 +num3)
    }
  }
}

const somar = somarNumeros(1)(2)(3)
console.log(somar)

function calcularNumeros(num1){
  return function(num2){
    return function(fn){
      return fn(num1, num2)
    }
  }
}

function multiplicar(num1, num2){
  return num1 * num2
}

const resultado = calcularNumeros(2)(5)(multiplicar)
console.log(resultado)