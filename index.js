console.log('Hello, Rich Cat!');

let animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]


/********************************************/
// var names = []
// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name)
// }


/********************************************/
// let names = animals.map(function (animal) {
//     return animal.name
// })


/********************************************/
// let names = animals.map(function (animal) {
//     return animal.name + ' is a ' + animal.species
// })


/************** Arrow Function ******************/
//var names = animals.map((animal) => animal.name)


/********* Shortened syntax for Arrow Function ****/
var names = animals.map((x) => x.name + ' is a ' + x.species)


console.log(names);