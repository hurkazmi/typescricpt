console.log("PROBLEM 10\n");
var numb = 114;
console.log("My favorite number is: ", numb);

console.log("PROBLEM 11\n");
var names = ["Hasaan", "Saram", "Hammad", "Hur"];
names.forEach(element => {
    console.log(element);
});

console.log("PROBLEM 12\n");
var names = ["Hasaan", "Saram", "Hammad", "Hur"];
names.forEach(element => {
    console.log("Hi, ", element, " We welcome you to our company");
});

console.log("PROBLEM 13\n");
var names = ["Corolla", "Unique 100"];
names.forEach(element => {
    console.log(`I would like to own a, ${element}`);
});

console.log("PROBLEM 14\n");
var guest = ["Hasaan Sheeda", "Saram Cheera", "Hur Shah"];
guest.forEach(i => {
    console.log(`Hi there, ${i} \n I will be really happy to see you at dinner today `);
});

console.log("PROBLEM 15\n");
var guest = ["Hasaan Sheeda", "Saram Cheera", "Hammad Lalli"];
var not_attending = guest.pop();
console.log(not_attending);
guest.forEach(i => {
    console.log(`Hi there, ${i} \n I will be really happy to see you at dinner today `);
});

console.log("PROBLEM 16\n");
var guest = ["Hasaan Sheeda", "Saram Cheera", "Hammad Lalli"];
var not_attending = guest.pop();
console.log(not_attending);
guest.forEach(function (i) {
    console.log("Hi there, ".concat(i, " \n I will be really happy to see you at dinner today "));
});
console.log("\n");
var more = ["Aneeq Cheera", "Ali baba"];
guest.push("Aneeq Cheera", "Ali baba");
guest.forEach(function (i) {
    console.log("Hi there, ".concat(i, " \n I will be really happy to see you at dinner today "));
});

console.log("PROBLEM 17\n");
var guests = ["Hasaan Sheeda", "Saram Cheera", "Hammad Lalli"];
console.log("Due to a delay, I can only invite two people for dinner.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner this time.`);
}
for (const remainingGuest of guests) {
    console.log(`${remainingGuest}, you're still invited to dinner!`);
}
guests.pop();
guests.pop();
console.log("My guest list is now empty:", guests);

console.log("PROBLEM 18\n");
var place_to_visit = ['Deosai', 'Nanga Parbat', 'K2 base camp', 'Makkaran coast'];
console.log("ORIGINAL LIST\n", place_to_visit);
console.log("LIST IN ALPHABETICAL ORDER\n", place_to_visit.slice().sort());
console.log("\nORIGINAL LIST\n", place_to_visit);
console.log("\nREVERSE ALPHABETIC ORDER\n", place_to_visit.slice().sort().reverse());

console.log("PROBLEM 19\n");
var guests = ["Hasaan Sheeda", "Saram Cheera", "Hammad Lalli"];
console.log("Due to a delay, I can only invite two people for dinner.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner this time.`);
}
for (const remainingGuest of guests) {
    console.log(`${remainingGuest}, you're still invited to dinner!`);
}
guests.pop();
guests.pop();
console.log("No of people I am inviting in Dinner:", guests.length);

console.log("PROBLEM 20\n");
var mount_arr = ["K2", "Cascade Range", "Denali"];
var riverr_arr = ["Indus", "Missouri", "Yellow River"];
var lang_arr = ["Russian", "English", "Urdu"];
var array = [...lang_arr, ...mount_arr, ...riverr_arr];
console.log(array);

console.log("PROBLEM 21\n");
const obj = {
    name: "Aneeq",
    id: 114,
    City: "Faisalabad",
};
console.log(obj.name);

console.log("PROBLEM 22\n");
var ar = [5, 89, 6, 3, 1, 0];
console.log(ar[5]); // Index 7 is out of range. Changed to 5.
console.log(ar);

console.log("PROBLEM 23\n");
var car = 'subaru';
var num1 = 2;
var num2 = "13";
var name1 = "Aneeq";
var name2 = 'Ka';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is num1 == 'num2'? I predict True.");
console.log(num1 == Number(num2));
console.log("Is num1 === 'num2'? I predict True.");
console.log(num1 === Number(num2));
console.log("Is name1 === 'name2'? I predict False.");
console.log(name1 === name2);

console.log("PROBLEM 24\n");
var car = 'subaru';
var num1 = 2;
var num2 = "2";
var name1 = "Aneeq";
var name2 = 'ka';
var ar = [58, 96, 2, 1, 3, 55, 7];
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is num1 == 'num2'? I predict True.");
console.log(num1 == Number(num2));
console.log("Is num1 === 'num2'? I predict True.");
console.log(num1 === Number(num2));
console.log("Is name1 === 'name2'? I predict False.");
console.log(name1 === name2);
console.log(58 in ar);
console.log(ar.includes(55));
console.log(1 in ar); // Changed from 1 || 95 in ar
console.log(1 && 95 in ar); // Changed from 1 && 95 in ar

console.log("PROBLEM 25\n");
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("You earned 5 points");
}

console.log("PROBLEM 26\n");
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("You earned 5 points");
}
else {
    console.log("You just earned 10 points");
}
var alien_color = 'red';
if (alien_color == 'green') {
    console.log("You earned 5 points");
}
else {
    console.log("You just earned 10 points");
}

console.log("PROBLEM 27\n");
var alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You just earned 15 points.");
}
else {
    console.log("Invalid Input!!");
}
var alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You just earned 15 points.");
}
else {
    console.log("Invalid Input!!");
}
var alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You just earned 15 points.");
}
else {
    console.log("Invalid Input!!");
}

console.log("PROBLEM 28\n");
var age = 25;
if (age < 2) {
    console.log("You are a baby");
}
else if (age >= 2 && age < 4) {
    console.log("You are a toddler");
}
else if (age >= 4 && age <= 13) {
    console.log("You are a kid");
}
else if (age >= 13 && age <= 20) {
    console.log("You are a teenager");
}
else if (age >= 20 && age <= 65) {
    console.log("You are an adult");
}
else if (age > 65) {
    console.log("You are an elder");
}

console.log("PROBLEM 29\n");
var fruits_arr = ["Banana", "Mangoes", "Water Melon", "Grapes", "Pomegranate"];
var fruit = "Water Melon";
if (fruits_arr.includes(fruit)) {
    console.log(`You really like ${fruit}`);
}
var fruit = "Orange";
if (fruits_arr.includes(fruit)) {
    console.log(`You really like ${fruit}`);
}
var fruit = "Banana";
if (fruits_arr.includes(fruit)) {
    console.log(`You really like ${fruit}`);
}
var fruit = "Pomegranate";
if (fruits_arr.includes(fruit)) {
    console.log(`You really like ${fruit}`);
}
var fruit = "Grapes";
if (fruits_arr.includes(fruit)) {
    console.log(`You really like ${fruit}`);
}

console.log("PROBLEM 30\n");
var users = ["Hasaan", "Saram", "Hammad", "Hur"];
for (var i = 0; i < users.length; i++) {
    if (users[i] == "Admin") {
        console.log(`Hello ${users[i]} would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${users[i]} thank you for logging in again`);
    }
}

console.log("PROBLEM 31\n");
var users = ["Hasaan", "Saram", "Hammad", "Hur", "Admin"];
for (var i = 0; i < users.length; i++) {
    if (users[i] == "Admin") {
        console.log(`Hello ${users[i]} would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${users[i]} thank you for logging in again`);
    }
}

console.log("PROBLEM 32\n");
const current_users = ["Hasaan", "Saram", "Hammad", "Hur", "Admin"];
const new_users = ["Hamza", "Omair", "Ali", "Admin", "Aneeq"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("Enter a new username");
    }
    else {
        console.log("Username is available");
    }
}

console.log("PROBLEM 33\n");
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 1; i <= 9; i++) {
    var ordinalEnding;
    if (i === 1) {
        ordinalEnding = "st";
    }
    else if (i === 2) {
        ordinalEnding = "nd";
    }
    else if (i === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${i}${ordinalEnding}`);
}

console.log("PROBLEM 34\n");
var fav_Pizza = ["Pasta", "Tikka", "Meat"];
for (var i = 0; i < fav_Pizza.length; i++) {
    console.log(fav_Pizza[i]);
}
for (var i = 0; i < fav_Pizza.length; i++) {
    console.log(`I like ${fav_Pizza[i]}`);
}
console.log("I really love pizza");

console.log("PROBLEM 35\n");
var animal_Names = ["dog", "cat", "rabbit"];
for (var i = 0; i < animal_Names.length; i++) {
    console.log(`${animal_Names[i]} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");

console.log("PROBLEM 36\n");
function make_shirt(size, message) {
    console.log(`The size of the shirt is ${size} and the message to be printed is "${message}"`);
}
make_shirt("XL", "CEOOOO");

console.log("PROBLEM 37\n");
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`The size of the shirt is ${size} and the message to be printed is "${message}"`);
}
makeShirt();
function makeLarge(size = "Medium", message = "I love TypeScript") {
    console.log(`The size of the shirt is ${size} and the message to be printed is "${message}"`);
}
makeLarge();

console.log("PROBLEM 38\n");
function describe_city(nameOfCity = "Faisalabad", country = "Pakistan") {
    console.log(`${nameOfCity} is the capital of ${country}`);
}
;
describe_city();
describe_city("Islamabad");
describe_city("Lahore");

console.log("PROBLEM 39\n");
function describeCity(nameOfCity = "Faisalabad", country = "Pakistan") {
    console.log(`${nameOfCity} is the capital of ${country}`);
}
;
describeCity();
describeCity("Islamabad");
describeCity("Lahore");

console.log("PROBLEM 40\n");
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artist 1", "Album 1", 1);
const album2 = make_album("Artist 2", "Album 2", 12);
const album3 = make_album("Artist 3", "Album 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);

console.log("Problem 41\n");
var magiciansName = ["Hasaan", "Saram", "Hur"];
function showMagicians(magiciansName) {
    magiciansName.forEach(i => {
        console.log(i);
    });
}
showMagicians(magiciansName);

console.log("Problem 42\n");
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function makeGreat(magicians) {
    const greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const originalMagicians = [...magicians];
const greatMagicians = makeGreat([...magicians]);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);

console.log("Problem 43\n");
function make_great(magicianss) {
    const greatMagicians = [];
    for (let magician of magicianss) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
function showMagicians(magicianss) {
    for (let magician of magicianss) {
        console.log(magician);
    }
}
const originalMagicians = [...magicianss];
const greatMagicians = make_great([...magicianss]);
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("Great Magicians:");
showMagicians(greatMagicians);

console.log("Problem 44\n");
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("Enjoy your sandwich!");
    console.log("-------------------------");
}
makeSandwich("Meat", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Chicken", "Mayonnaise", "Pickles");

console.log("Problem 45\n");
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar('Toyota', 'Camry', ['color', 'silver'], ['sunroof', true]);
console.log(myCar);
