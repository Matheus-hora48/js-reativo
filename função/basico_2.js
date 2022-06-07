function bomdia(){
  console.log('Bom dia!')
}

const boatarde = function(){
  console.log('Boa tarde!')
}

// 1) function como parametro pra outra
function executarQualquerCoisa(fn){
  if (typeof fn == 'function') {
    fn()
  }
}

executarQualquerCoisa(3)
executarQualquerCoisa(boatarde)

// 2) Retornar uma função a partir de outra função
function potencia(base){
  return function(exp){
    return Math.pow(base, exp)
  }
}

const bits8 = potencia(2,8)
console.log(bits8(8))