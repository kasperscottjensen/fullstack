// rocks

const rocks = [
    {name: 'led zeppelin', age: 70},
    {name: 'granite', age: 500_000_000_000},
    {name: 'dwayne johnson', age: 47}
];

// map

const rocksAgedOneYear = rocks.map(rock => {
    return {...rock, age: rock.age + 1};
});

console.log(rocks);
console.log(rocksAgedOneYear);

// filter

const rocksEvenAged = rocks.filter(rock => {
    return rock.age % 2 === 0;
});

console.log(rocksEvenAged);