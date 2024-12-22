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

let mot = "hello world hello";
console.log(mot.replaceAll("hello","goodbye"));

let chaine = "montaz, gregory, malo";
console.log(chaine.split(", "));

//  ARRAY METHODS

let colors = ["blue","yellow","red"];
colors.push("green");
console.log(colors);

console.log(colors.pop());
console.log(colors)

console.log(colors.shift());
console.log(colors)


colors.unshift("black");
console.log(colors)


let fruits= ["apples", "mango","banana","peach"];

let vegetables = ["lettuce", "spinach", "carrots"];

let combined = fruits.concat(vegetables);
console.log(combined);
console.log(combined.slice(2,7))

let hfruits = ["Pomme", "Banane", "Orange"];
hfruits.splice(1, 1, "Mangue"); // Supprime 1 élément à l'index 1 et ajoute "Mangue"




console.log("*********8")

let fruit2 = ["Pomme", "Orange","Banane","pears"];

if (fruit2.indexOf("mango") == -1) {
    fruit2.push("mango");
    console.log(fruit2);
} else {
    console.log("the element exist already");
}

if (fruit2.indexOf("Banane") != -1) {
    fruit2.splice(fruit2.indexOf("Banane"),3);
    console.log(fruit2);
} else {
    console.log("the element does not  exist ");
}



