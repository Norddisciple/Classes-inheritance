import Undead from '../class/Undead';

test('Тест дефолтного перса', () => {
  const pers = new Undead('igor', 'Undead');
  const correct = {
    name: 'igor',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(pers).toEqual(correct);
});
