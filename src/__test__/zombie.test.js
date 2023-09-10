import Zombie from '../class/Zombie';

test('Тест дефолтного перса', () => {
  const pers = new Zombie('igor', 'Zombie');
  const correct = {
    name: 'igor',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(pers).toEqual(correct);
});
