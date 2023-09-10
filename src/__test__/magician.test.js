import Magician from '../class/Magician';

test('Тест дефолтного перса', () => {
  const pers = new Magician('igor', 'Magician');
  const correct = {
    name: 'igor',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(pers).toEqual(correct);
});
