// PRIVATE FUNCTIONS
//#region 
/**
 * Starting a function name with an underscore is a convention showing that this is a private function.
 * @param args 
 */
const _privateFunction = function(...args) {
    //doStuff();
};

const variable = (argument) => ((copyArgument) => {
    let argument = copyArgument; // This variable is private
})(argument);
//#endregion


// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
//#region
/**
 * This method uses an (anonymous) IIFE (Immediately Invoked Function Expression).
 * Note: These are especially useful as they can hold private variables.
 * @param args These members will be private
 */
(async function() {
    //doStuff();
})(...args);

(async () => {
    //doStuff();
})(...args);

(function() {
    //doStuff();
})(...args);

(() => {
    //doStuff();
})(...args);
//#endregion


// ARRAY DESTRUCTURING
//#region
/**
 * These destructuring tricks will save lots of time and memory space
 */

let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];
// rest = [30, 40, 50]

const array = [2, 3, 4];
const [x, y, z] = array;
// x = 2, y = 3, z = 4

const [first, , second] = array;
// first = 2, second = 4

[first, second] = [second, first];
// first = 4, second = 2

const nested = [11, 22, [55, 66]];
const [q, w, [e, r]] = nested;
// q = 11, w = 22, e = 55, r = 66
//#endregion


// OBJECT DESTRUCTURING
//#region
/**
 * This is very useful for working with objects, nodes.
 */
let g = 90;
let h = 45;
const obj = { g: 4, h: 5, j: 6 };
({a, b} = obj);
// g = 4, h = 5

const friday = {
    open: 900,
    close: 2300
};
const { open: openTime } = friday;
// openTime = 900
//#endregion


// DEFAULT ARGUMENT VALUES
//#region
/**
 * Default values for arguments within functinos
 */

const defaultArgs = function (arg1 = 0, arg2 = 99) {
    // If nothing is passed, the default values are used.
    // Otherwise, the passed in values are used.
}
//#endregion


// SPREAD OPERATORS (...), (,,,) AND REST OPERATORS
//#region
/**
 * Spread operators are very useful for unpacking arrays
 * See: Array Destructuring
 */
const str = 'Bradley';
const letters = [...str];
// letters = [B, r, a, d, l, e, y]

const addEmptySpace = [,,,...str,,];
// addEmptySpace = [empty × 3, 'B', 'r', 'a', 'd', 'l', 'e', 'y', empty]
// Note: There are two commas at the end but only one empty value at the end of the array. 
// This is because arrays are comma delimited.

const [i, o, ...others] = [1, 2, 3, 4, 5];
// i = 1, o = 2, others = [3, 4, 5]
//#endregion


// OR ASSIGNMENT OPERATOR (||) AND NULLISH COALESCING OPERATOR (??)
//#region
/**
 * I won't go too far into detail with these, but there are a few JS specific uses that I will document.
 */

let num = 4;
num += 1;
// num = 5

let numPeople = numPeople || 10;
// this returns the first truthy result, left to right. It is the same as:
numPeople ||= 10;

// What if you have a zero, which is falsy, but still want to do comparison as if it was truthy?
numPeople = 0;
numPeople ??= 10; // Same as:   numPeople = numPeople ?? 10;
// numPeople = 0
//#endregion


// WORKING EXAMPLE
//#region
const game = 
{
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: 
    [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',

      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: 
    {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  const [players1, players2] = game.players;

  const [gk, ...fieldPlayers] = players1;

  const allPlayers = [...players1, ...players2];

  players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

  const {odds: {team1, x: draw, team2}} = game;

  const printGoals = function(...players) {
    console.log(`{players.length}`);
  }
  //#endregion


// OPTIONAL CHAINING
//#region
/**
 * This is a very useful way of finding out if objects exist before doing work on them.
 */
if (objectVar.method1 && objectVar.method1.stuff) {
    console.log(objectVar.method1.stuff);
}
// Is the same as:
console.log(objectVar?.method1?.stuff);
//#endregion


