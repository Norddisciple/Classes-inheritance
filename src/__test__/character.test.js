import Character from '../class/Character';

test('valid arguments', () => {
  const result = new Character('Character', 'Swordsman');
  expect(result).toEqual({
    name: 'Character',
    type: 'Swordsman',
    health: 100,
    attack: undefined,
    defence: undefined,
    level: 1,
  });
});

test('short name', () => {
  expect(() => new Character('C', 'Swordsman')).toThrowError('Имя должно быть строкой от 2 до 10 символов');
});

test('long name', () => {
  expect(() => new Character('CharacterCharacter', 'Swordsman')).toThrowError('Имя должно быть строкой от 2 до 10 символов');
});

test('invalid type', () => {
  expect(() => new Character('Character', 'Batman')).toThrowError('Ошибка');
});
