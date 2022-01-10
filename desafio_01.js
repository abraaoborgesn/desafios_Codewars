// Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

// Conclua a solução de forma que ela retorne a soma de todos os múltiplos de 3 ou 5 abaixo do número passado. Além disso, se o número for negativo, retorne 0 (para os idiomas que os possuem).

// Nota: Se o número é um múltiplo de ambos 3 e 5, só contam-lo uma vez .

function solution(number) {
  let array = []
  let newNumber = number - 1
  
  if (number < 0) {
    return 0
  } else {

    for (let i = newNumber; i > 0; i--) {
      if (i % 5 == 0 || i % 3 == 0) {
        array.push(i)
      }
    }
    

    var soma = array.reduce((soma, i) =>soma + i, 0)
    
    console.log(soma)

    return soma

  }
}

solution(10)

// ============================ OUTRA SOLUÇÃO POSSÍVEL ====================

// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   console.log(sum)
//   return sum;
// }

// solution(10)