const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const funcao = productDetails;
  const retornoFuncao = productDetails();

  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ]);
  });
  it('Teste se productDetails é uma função.', () => {
    expect(typeof funcao).toEqual('function');
  });
  it('Teste se o retorno da função é um array', () => {
    expect(Array.isArray(retornoFuncao)).toBe(true);
  });
  it('Teste se o array retornado pela função contém dois itens dentro', () => {
    expect(retornoFuncao.length).toEqual(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof retornoFuncao[0]).toBe('object');
    expect(typeof retornoFuncao[1]).toBe('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('amor', 'amiga')[0] !== productDetails('amor', 'amiga')[1]).toEqual(true);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    const ret1 = Object.values(retornoFuncao[0].details.productId).slice(-3).join('').toLowerCase();
    const ret2 = Object.values(retornoFuncao[1].details.productId).slice(-3).join('').toLowerCase();
    expect(ret1 === ret2).toEqual(true);
  });

});
