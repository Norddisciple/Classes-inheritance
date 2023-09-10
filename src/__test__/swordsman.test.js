import Swordsman from '../class/Swordsman';

test('Тест дефолтного перса', () => {
  const pers = new Swordsman('igor', 'Swordsman');
  const correct = {
    name: 'igor',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(pers).toEqual(correct);
});
