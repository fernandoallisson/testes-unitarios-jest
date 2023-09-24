const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
    const oQueTenho = createMenu()
    expect(oQueTenho).toHaveProperty(fetchMenu);
  });
  it('Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
    const oQueTenho = createMenu();
    const func = createMenu.fetchMenu;
    expect(oQueTenho).toHaveProperty('fetchMenu');
    expect(typeof func).toBe('function')
  });
  it('Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks', () => {
    const oQueTenho = createMenu({ food: {}, drinks: {} }).fetchMenu();
    const keysEsperadas = { food: {}, drinks: {} };
    expect(oQueTenho.keys(menu)).toEqual('keysEsperadas');
  });
  it('Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks', () => {
    const oQueTenho = createMenu({ food: {}, drinks: {} }).fetchMenu();
    const keysEsperadas = ['food', 'drinks'];
    expect(oQueTenho.keys(menu)).toEqual('keysEsperadas');
  });
});
