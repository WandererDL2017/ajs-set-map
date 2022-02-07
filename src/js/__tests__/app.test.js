/* eslint-disable */
import Team from "../app";

const archer = {name: 'лучник', health: 100};
let heroes = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 100},
    {name: 'мечник', health: 100},
    {name: 'лучник', health: 100},
    {name: 'лучник', health: 100},
    {name: 'мечник', health: 100},
    {name: 'маг', health: 100},
    {name: 'зомби', health: 100},
    {name: 'зомби', health: 100},
];
const team = new Team();
const team2 = new Team();

test('Добавили игрока в команду', () => {
    const expected = new Set();
    team.add(archer);
    expected.add({name: 'лучник', health: 100});
    expect(team.members).toEqual(expected);
});

test('Дубль персонажа', () => {
    function getError() {
        team.add(archer);
        return team.add(archer);
    }
    
    expect(getError).toThrowError(new Error('Такой персонаж уже есть'));
});

test('Добавлена группа персонажей', () => {
    team2.addAll(...heroes);
    function getArray() {
        return Array.from(team2.members);
    }
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
        {name: 'мечник', health: 100},
        {name: 'зомби', health: 100}
    ];
    
    expect(getArray()).toEqual(expected);
});

test('конвертация Set в массив.', () => {
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
        {name: 'мечник', health: 100},
        {name: 'зомби', health: 100}
    ];
    expect(team2.toArray()).toEqual(expected);
});