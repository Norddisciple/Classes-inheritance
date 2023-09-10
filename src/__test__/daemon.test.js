import Daemon from '../class/Daemon';

test('Тест дефолтного перса', () => {
  const pers = new Daemon('igor', 'Daemon');
  const correct = {
    name: 'igor',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(pers).toEqual(correct);
});
