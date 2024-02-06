function sortHeroesByHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}

module.exports = sortHeroesByHealth;

// const sortHeroesByHealth = require('./sortHeroesByHealth');

describe('sortHeroesByHealth', () => {
  it('должна вернуть массив с героями, отсортированными по уровню здоровья', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const result = sortHeroesByHealth(heroes);
    const expectedResult = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(result).toEqual(expectedResult);
  });
});
