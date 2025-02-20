const marvel_heros = ["thor", "spiderman", "ironman"];
const dc_heros = ["superman", "batman", "green lantern"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// b=marvel_heros.concat(dc_heros);

// console.log(b);

//Spread Operator

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.from("Deepanker"));
console.log(Array.from({name:"JavaScript"}));  //Interesting Fact