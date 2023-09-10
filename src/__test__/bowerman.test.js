import Bowerman from '../class/Bowerman';

test('Проверка дефолтного перса', () => {
  const pers = new Bowerman('igor', 'Bowerman');
  const correct = {
    name: 'igor',
    type: 'Bowerman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(pers).toEqual(correct);
});
