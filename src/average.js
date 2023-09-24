/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const verificaArrayVazio = (array) => array.length === 0;
const verificaArrayNumeros = (array) => array.every((element) => typeof element === 'number');

const mediaDosNumeros = (array) => {
  let soma = 0;
  array.forEach((element) => {
    soma += element;
  });
  let media = soma / array.length;
  return Math.round(media);
};

const average = (array) => {
  if (verificaArrayVazio(array) || !verificaArrayNumeros(array)) {
    return undefined;
  } return mediaDosNumeros(array);
};
console.log(average([1, 2, 3, 4, 1]));

module.exports = average;
