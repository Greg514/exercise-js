let name = "gregory";
console.log(name);

let car = "acura";
let lengthCar = car.length;
console.log(lengthCar);

let caracter = car.charAt(2)
console.log(caracter);

// Description : Retourne le code Unicode du caractère à une position donnée.
let text = "ABC";
console.log(text.charCodeAt(2));

let par = car.at(-2);
console.log(par) 

let ftext = "JavaScript";
console.log(ftext[4]); // "S"

let gtext = "JavaScript";
console.log(gtext.slice(2, 9));
console.log(gtext.slice(4)) // "Java"

let water = "hello water";
console.log(water.indexOf("water"))

let ground = "today we will go to carrefour laval!";
console.log(ground.indexOf("carrefour"));

// Description : Méthodes pour chercher une sous-chaîne dans une chaîne. startsWith()
let air = "air canada";
console.log(air.endsWith("nada"));


let metal = " liklle thing";
console.log(metal.includes("liklle",1))


let search = " pizza  hut         ";
console.log(search.length);
console.log(search.trim().length)

let text1 = " hello";
let text2 = "world    ";

console.log(text1.concat("///",text2).trim());