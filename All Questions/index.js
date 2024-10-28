"use strict";
// // // Exercise 1
Object.defineProperty(exports, "__esModule", { value: true });
// // // Install Node.js, TypeScript and VS Code on your computer. 👍
// // // Exercise 2
// // let personName: string= "ERIC";
// // console.log(`Hello ${personName} would you like to learn some python today?`);
// // // Exercise 3
// // // lower case
// // let personName: string = "Baber";
// // console.log("lowercase:", personName.toLowerCase());
// // // upper case
// // console.log("uppercase:", personName.toLocaleUpperCase());
// // // Title case
// // console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
// // Exercise 4
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);
// // Exercise 5
// let quote: string = "A person who never made a mistake never tried anything new.";
// let famous_person = "Albert Einstein";
// let message = `${famous_person} once said, ${quote}`;
// console.log(message);
// // Exercise 6
// let personName: string = `\n\t BABAR AZAM\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);
// // Exercise 7 & 8
// // exercise 7 & 8 are merge.
// console.log(5 + 3);  // Addition: 5 + 3 = 8
// console.log(16 - 8);  // Subtraction: 16 - 8 = 8
// console.log(4 * 2);  // Multiplication: 4 * 2 = 8
// console.log(64 / 8);  // Division: 64 / 8 = 8
// // Exercise 9
// let favoriteNumber: number = 7;
// console.log(`My favorite number is ${favoriteNumber}`);
// // Exercise 10
// // Choose two of the program you'v written, and add at least one comment to each.
// // I did the same as written in the question but you have also said that all the work has to be done in one file.
// // My name is Muhammad Shahzaib
// // Dated: 7/03/2024
// // This program will run simple code just like "Hello FANS"
// console.log('Hello FANS');
// // My name is Muhammad Shahzaib
// // Dated: 7/03/2024
// // This program will multiplication
// console.log(5 * 2);
// // Exercise 11
// let members: string[] =['Ali','Aqsa','Ebad','SANA','Abdullah'];
// for(let i=0; i<members.length; i++){
//     console.log(members[i]);
// }
// // Exercise 12
// let members: string[] =['Ali','Sami','Ahad','Abid','Iqra'];
// let message: string='Kal birthday hai kis ka:';
// for(let i=0; i<members.length; i++){
//     console.log(message + members[i]);
// }
// // Exercise 13
// let transportation: string [] = ['civic','bike','bus','suzuki'];
// for(let i=0; i<transportation.length; i++){
//     console.log('I would like to own a : ' + transportation[i]);
// }
// // Exercise 14
// let guest_list : string [] = ['Ali','Farhan','Raza','Ayesha'];
// for(let i=0; i<guest_list.length; i++)(
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank You\n')
// )
// export{guest_list};
// // Exercise 15
// let not_present : string = 'Ayesha';
// let new_guest : string = 'Paul Alan';
// guest_list[3] = new_guest;
// // for(let i=0; i<guest_list.length; i++){
// //     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. \nThank You\n')
// // }
// console.log(`Ms. ${not_present} will not coming tomorrow dinner. `);
// // Exercise 16
// guest_list.unshift('Shaheen','Sarfaraz','Ahson');
// // for(let i=0; i<guest_list.length; i++){
// //     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. We found big table so we decide to invite 3 more guest. \nThank You\n')
// // }
// // Exercise 17
// console.log('\nUnfortunately we cannot arrange big table, only two people for dinner allow. ');
// while(guest_list.length>2){
//     let removed_guest = guest_list.pop();
//     console.log(`Sorry Sir/Madam, ${removed_guest} you are not invited for dinner.`);
// }
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\n Yes you are still invited on tomorrow dinner. \nThank You\n')
// }
// guest_list.splice(0,2);
// console.log(guest_list);
// // Exercise 18
// // 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// // • Store the locations in a array. Make sure the array is not in alphabetical order.
// // • Print your array in its original order.
// let places : string [] = ['Cap Town',' Delhi',' Faisalabad',' Bangkok',' Ahmadabad'];
// // console.log('original : ' + places);
// // Print your array in alphabetical order without modifying the actual list.
// // console.log('copy ' + [...places].sort());
// // • Show that your array is still in its original order by printing it.
// // console.log('original : ' + places);
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log('copy ' + [...places].sort().reverse());
// // • Show that your array is still in its original order by printing it again.
// console.log('copy ' + [...places].sort().reverse());
// // • Reverse the order of your list. Print the array to show that its order has changed.
// console.log('original : ' + places.sort());
// // • Reverse the order of your list again. Print the list to show it's back to it's original order.
// console.log('original : ' + places.sort().reverse());
// // • Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
// console.log('\nSorted in reverse alphabetical order:');
// console.log(places.sort((a, b) => b.localeCompare(a)));
// // Exercise 19
// // Print the message indicating the number of people you are inviting to dinner.
// import{ guest_list } from '../14. Guest_List/appguest';
// console.log(`n\ PRINTING NUMBER OF GUEST INVITED`);
// console.log(`we had finally invited ${guest_list.length} people from exercise 14`);
// // Exercise 20
// let languages : string [] = ['Urdu','English','Hindi','French','Arabic','Chines','Punjabi','Japanese','portuguese'];
// console.log("List of Languages : ");
// for(let top of languages){
//     console.log(top)
// }
// // Exercise 21
// interface Item {
//     name: string;
//     price: number;
// }
// // Create two objects
// const book: Item = {
//     name: "ESSENTIAL TYPESCRIPT",
//     price: 560
// };
// const apple: Item = {
//     name: "apple",
//     price: 450
// };
// console.log(`book name: ${book.name}, price: $${book.price}`);
// console.log(`apple name: ${apple.name}, price: $${apple.price}`);
// // Exercise 22
// let array1: (string | number)[] = ['Baber', 'Tahr', 3, 5, 8];
// console.log(array1[6]); // Accessing the 5th element (index 4)
// let array2: (string | number)[] = ['Baber', 'Tahr', 3, 5, 8, 'sana'];
// console.log(array2[5]); // Accessing the 6th element (index 5)
// // Exercise 23
// let car : string = 'Subaru';
// // Test 1: Equality comparison (True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // True
// // Test 2: Strick equality comparison (True)
// console.log("Is car === 'Subaru'? I predict True.");
// console.log(car === 'Subaru'); // True
// // Test 3: Inequality comparison (False)
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru'); // False
// // Test 4: Strick inequality comparison (False)
// console.log("Is car !== 'Subaru'? I predict False.");
// console.log(car !== 'Subaru'); // False
// // Test 5: Less than comparison (False)
// console.log("Is car < 'subaru'? I predict False.");
// console.log(car < 'subaru'); // False (lexicographic comparison)
// // Test 6: Greater than comparison (False)
// console.log("Is car > 'subaru'? I predict False.");
// console.log(car > 'subaru'); // False (lexicographic comparison)
// // Test 7: Less than or equal to comparison (True)
// console.log("Is car <= 'subaru'? I predict True.");
// console.log(car <= 'subaru'); // True (lexicographic comparison)
// // Test 8: Greater than or equal to comparison (True)
// console.log("Is car >= 'subaru'? I predict True.");
// console.log(car >= 'subaru'); // True (lexicographic comparison)
// // Test 9: Checking truthiness (True)
// console.log("Is car? I predict True.");
// console.log(car); // True (non-empty string is truthy)
// // Test 10: Checking falsiness (False)
// console.log("Is !car? I predict False.");
// console.log(!car); // False (empty string is falsy)
// // Exercise 24
// let car: string = 'subaru';
// let age: number = 25;
// let numbers: number[] = [1, 2, 3, 4];
// // **String Tests**
// //Test 1: Equality (True)
// console.log("Is car =='subaru'? I predict True.");
// console.log(car == 'subaru'); // True (case-insensitive)
// // Test 2: Strict equality (False)
// console.log("Is car === 'subaru'? I predict False.");
// console.log(car === 'subaru'); //False (case-sensitive)
// // Test 3: Inequality (True)
// console.log("Is car != 'Toyota'? I predict True.");
// console.log(car != 'Toyota'); //True
// // Test 4: Inequality (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru'); // False (case-sensitive)
// // **Lowercase Function Tests**
// // Test 5: Lowercase conversation (True)
// console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLocaleLowerCase() == 'subaru'); // True (convert to lowercase)
// // Test 6: Lowercase conversation (False)
// console.log("Is car === car.toLowerCase()? I predict False.");
// console.log(car.toLocaleLowerCase()); // False (original value remains uppercase)
// // **Numerical Tests**
// // Test 7: Equality (True)
// console.log("Is age == 25? I predict True.");
// console.log(age == 25); // True
// // Test 8: Inequality (False)
// console.log("Is age != 30? I predict False.");
// console.log(age != 30); // (False)
// // Test 9: Greater than (False)
// console.log("Is age > 30? I predict False.");
// console.log(age > 30); // (False)
// // Test 10: Less than or equal (True)
// console.log("Is age <= 25? I predict True.");
// console.log(age <= 25); // (True)
// // **Logical Operators**
// // Test 11: AND (True)
// console.log("Is age > 20 && age < 30? I predict True.");
// console.log(age > 20 && age < 30); // True (both conditions met)
// // Test 12: OR (False)
// console.log("Is age > 30 || age < 18? I predict False.");
// console.log(age > 30 || age < 18); // False (neither condition met)
// // **Array Tests**
// // Test 13: In array (True)
// console.log("Is 3 in numbers? I predict True.");
// console.log(3 in numbers); // True (checks for index existence)
// // Test 14: Not in array (False)
// console.log("Is 6 not in numbers? I predict True.");
// console.log(6 in numbers); // True (negative of "in" operator)
// // Exercise 25
// // Create a variable called alien color
// let alien_color: string = "Red";
// /* Write an if statement to test whether the alien's color is Red. If it is, 
// Print a message that "The player just earned 5 points." */
// if(alien_color == "Red") {
//     console.log("The player just earned 5 points.");
// }
// // Write one version of this program that passes the if test and another that fails.
// // (The version that fails will have no output.)
// alien_color = "Green";
// if(alien_color == "Red") {
//     console.log("The player just earned 5 points.");
// }
// // Exercise 26
// // Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// let alien_color: string = "Yellow";
// // If the alien's color is green, print a statement that 
// // "The player just earned 5 points for shooting the alien."
// if(alien_color == "Yellow"){
//     console.log("The player just earned 5 points for shooting the alien.");
// } else {
//     console.log("The player just earned 10 points.")
// }
// alien_color = "Red";
// if(alien_color == "Yellow"){
//     console.log("The player just earned 5 points for shooting the alien.");
// }
// // Exercise 27
// let alien_color: string = "Green";
// // If the alien is green, print a message that the player earned 5 points.
// if(alien_color == "Green"){
//     console.log("The player earned 5 points");
// }
// // If the alien is yellow, print a message that the player earned 10 points.
// else if(alien_color == "Yellow"){
//     console.log("The player just earned 10 points");
// }
// // If the alien is red, print a message that the player earned 15 points.
// else if(alien_color == "Red"){
//     console.log("The player just earned 15 points");
// }
// else{
//     console.log("Please select right color.")
// }
// // Write three version of this program, making sure each message is printed for the appropriate color alien.
// // version 2
// alien_color = "Red";
// if(alien_color == "Green"){
//     console.log("The player earned 5 points");
// }
// else if(alien_color == "Yellow"){
//     console.log("The player just earned 10 points");
// }
// else if(alien_color == "Red"){
//     console.log("The player just earned 15 points");
// }
// else{
//     console.log("Please select right color.")
// }
// // version 3
// alien_color = "Yellow";
// if(alien_color == "Green"){
//     console.log("The player earned 5 points");
// }
// else if(alien_color == "Yellow"){
//     console.log("The player just earned 10 points");
// }
// else if(alien_color == "Red"){
//     console.log("The player just earned 15 points");
// }
// else{
//     console.log("Please select right color.")
// }
// // Exercise 28
// // 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// let age: number = 19;
// // • If the person is less than 2 years old, print a message that the person is a baby.
// if(age<2){
//     console.log("The person is a baby");
// }
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// if(age>=2 && age<4){
//     console.log("The person is a toddler");
// }
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// if(age>=4 && age<13){
//     console.log("The person is a kid");
// }
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// if(age>=13 && age<20){
//     console.log("The person is a teenager");
// }
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// if(age>=20 && age<65){
//     console.log("The person is a adult");
// }
// // • If the person is age 65 or older, print a message that the person is an elder.
// else{
//     console.log("The person is an elder");
// }
// // Exercise 29
// // Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statement that check for certain fruits in your array.
// let FavoriteFruits: string [] = ['apple','pineapple','lemon','banana'];
// if(FavoriteFruits.includes('apple')){
//     console.log('I really like apple!');
// }
// // Make a array of your three favorite fruits and call it favorite fruits.
// // Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as you really like bananas!
// if(FavoriteFruits.includes('pineapple')){
//     console.log('I really like pineapple!');
// }
// if(FavoriteFruits.includes('lemon')){
//     console.log('I really like lemon!');
// }
// if(FavoriteFruits.includes('banana')){
//     console.log('I really like banana!');
// }
// if(FavoriteFruits.includes('mango')){
//     console.log('I really like mango!');
// }
// // Exercise 30
// // Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// let users : string [] = ['Sana','Baber','Saba','Thar'];
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// for(let user of users){
//     if(user == 'admin'){
//         console.log(`Hello ${user}, would you like to see a status report?`);
//     }else{
//         console.log(`Hello ${user}, thank you for logging in again.`);
//     }
// }
// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// // Exercise 31
// // No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// // • If the list is empty, print the message We need to find some users!
// let users : string [] = ['Sana','Baber','Saba','Thar','Admin'];
// if(users.length === 0){
//     console.log("We need to find some users!");
// }
// // • Remove all of the usernames from your array, and make sure the correct message is printed.
// else{
//     users = [];
//     console.log("All users have been removed." + users.length);
// }
// // Exercise 32
// let current_users: string[] = ["saba", "admin", "ahmad", "baber", "adam"];
// let new_users: string[] = ["afros", "abbas", "dua", "admin", "abdul"];
//     new_users.forEach(newUser => {
//         if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//             console.log(`${newUser} will need to enter a new username.`);
//         } else {
//             console.log(`${newUser} is available.`);
//         }
//     });
//     // Exercise 33
//     let muNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // for loop
// for(let i = 0; i < muNumbers.length; i++){
//     // now we use conditions
//     if(muNumbers[i] == 1){
//         console.log(`${muNumbers[i]}st`);
//     } else if(muNumbers[i] == 2){
//         console.log(`${muNumbers[i]}nd`);
//     } else if(muNumbers[i] == 3){
//         console.log(`${muNumbers[i]}rd`);
//     } else if(muNumbers[i] >= 4 && muNumbers[i] <= 9){
//         console.log(`${muNumbers[i]}th`);
//     }
// };
// // Exercise 34 
// let myPizza = ["Cheese Pizza", "Chicken Tikka Pizza", "Tomato Pizza", "Buffalo Style Pizza", "Brooklyn Style Pizza", "Bismark Pizza\n\n"];
// // print only names of pizza
// for(let i = 0; i < myPizza.length; i++){
//     console.log(myPizza[i]);
// };
// // printing names and sentence/message
// for(let i = 0; i < myPizza.length; i++){
//     console.log(`I like to eat ${myPizza[i]}`);
// };
// console.log(
//     `\n"Pizza: a slice of happiness topped with endless possibilities."`
// );
// // Exercise 35
// let animals: string[] = ["Cat", "Rabbit", "Dog"];
// animals.forEach(animals => {
//     console.log(`A ${animals} would be a great pet.`);
// });
// console.log("Any of these animals would be a great pet!");
// // Exercise 36
// function make_shirt(size: string, message: string){
//     console.log(`The size of the shirt is ${size} and the message is ${message}`);
// }
// make_shirt("medium", "'Code is Life'.");
// // Exercise 37
// function make_shirt(size: string = "Large", message: string = "I love Typescript"){
//     console.log(`Making a ${size} t-shirt with the message "${message}" print on it.`);
// }
// make_shirt(); // Default large and message
// make_shirt("Medium"); // Default message, medium size
// make_shirt("Small", "I love JavaScript"); // Custom message, small size
// // Exercise 38
// function describe_city(city: string, country: string = "Unknown") {
//     console.log(`${city} is in ${country}.`);
// }
// // 3 cities
// // Calling the function for three different cities
// describe_city("Karachi", "Pakistan");
// describe_city("Paris", "France");
// describe_city("New York", "America"); // Using default country
// // Exercise 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// // Calling the function with three different city-country pairs
// const city1 = city_country("Lahore", "Pakistan");
// const city2 = city_country("Tokyo", "Japan");
// const city3 = city_country("Paris", "France");
// // Printing the returned values
// console.log(city1);
// console.log(city2);
// console.log(city3);
// // Exercise 40
// interface Album {
//     artist: string;
//     title: string;
//     tracks?: number;
// }
// function make_album(artist: string, title: string, tracks?: number): Album {
//     let album: Album = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// // Making five dictionaries representing different albums with human names
// const album1 = make_album("Beyoncé", "Lemonade", 12);
// const album2 = make_album("Michael Jackson", "Thriller", 9);
// const album3 = make_album("Lady Gaga", "The Fame Monster", 8);
// const album4 = make_album("Elton John", "Goodbye Yellow Brick Road", 17);
// const album5 = make_album("Bob Marley", "Legend");
// // Printing each return value to show that Objects are storing the album information correctly
// console.log(album1);
// console.log(album2);
// console.log(album3);
// console.log(album4);
// console.log(album5);
// // Exercise 41
// // Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magician: string[] = ["John", "Micheal", "Shard"];
// function show_magicians(magician: string[]){
//     magician.forEach(magician => {
//         console.log(magician);
//     });
// };
// show_magicians(magician);
// // Exercise 42
// // Define an array of magician names
// let magicians: string[] = ["John", "Micheal", "Shard"];
// // Function to show the names of magicians
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }
// // Function to modify the array by adding "the Great" to each magician's name
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i];
//     }
// }
// // Call show_magicians() to display original magician names
// console.log("Original Magicians:");
// show_magicians(magicians);
// // Call make_great() to modify the array
// make_great(magicians);
// // Call show_magicians() again to display modified magician names
// console.log("\nGreat Magicians:");
// show_magicians(magicians);
// // Exercise 43
// let magicians: string[] = ["John", "Micheal", "Shard"];
// // Function to show the names of magicians
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }
// // Function to modify a copy of the array by adding "the Great" to each magician's name
// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     for (let magician of magicians) {
//         great_magicians.push("the Great " + magician);
//     }
//     return great_magicians;
// }
// // Call make_great() with a copy of the array and store the modified array in a separate array
// let great_magicians: string[] = make_great([...magicians]); // Using spread operator to create a copy
// // Call show_magicians() with the original and modified arrays
// console.log("Original Magicians:");
// show_magicians(magicians);
// console.log("\nGreat Magicians:");
// show_magicians(great_magicians);
// // Exercise 44
// function make_sandwich(...items: string[]){
//     console.log(`Making a sandwich with: ${items.join(', ')}.`);
// };
// make_sandwich("ham", "cheese");
// make_sandwich("turkey", "lettuce", "tomato");
// make_sandwich("avocado", "sprouts", "mustard", "mayo");
// // Exercise 45 🎉🎊🥳
// interface Car {
//     manufacturer: string;
//     model: string;
//     [key: string]: any; // Allow arbitrary additional properties
// }
// function create_car(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
//     let car: Car = { manufacturer, model };
//     args.forEach(arg => {
//         const [key, value] = Object.entries(arg)[0];
//         car[key] = value;
//     });
//     return car;
// }
// // Call the function with required information and additional name-value pairs
// const myCar = create_car("Toyota", "Camry", { color: "blue" }, { year: 2022 });
// // Print the returned object to check if all the information was stored correctly
// console.log(myCar);
// // Exercise 46
// let laptop = {
//     make : "DELL",
//     model : "i7 GEN 12",
//     year : 2022,
//     describe : function(){
//         console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
//     }
// };
// laptop.describe();
// // Exercise 47
// // Advanced array destructuring: Given an array of objects representing different laptops, each with properties make, models, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// let laptops = [
//     {
//         make: "DELL",
//         model: "i7 GEN 12",
//         year: 2022
//     },
//     {
//         make: "HP",
//         model: "i5 GEN 11",
//         year: 2021
//     },
//     {
//         make: "LENOVO",
//         model: "i3 GEN 10",
//         year: 2020
//     },
// ];
// let [laptop1, laptop2, laptop3] = laptops;
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop3);
// // Exercise 48
// let priceSet1 = [35000, 40000, 45000];
// let priceSet2 = [38000, 47000, 55000];
// let combinedPrices = [...priceSet1, ...priceSet2].sort((a,b) => a - b);
// console.log(combinedPrices);
// // Exercise 49
// function logHobbies(...hobbies:string[]) {
//     hobbies.forEach(hobby => {
//         console.log(`I enjoy ${hobby}.`);
//     });
// };
// logHobbies("Football", "Coding", "Movies", "Gaming", "Songs");
// // Exercise 50
// let myDay = `Start my day with this steps:
// 1. Pray Fajar
// 2. Coding 4 hours
// 3. Social activity
// 4. Gaming
// 5. Taking bath`;
// console.log(myDay);
// // Exercise 51
// function calculateArea(width: number, height: number): any {
//     return width * height;
// };
// let calculateArea1 = (width: number, height: number): number => width * height;
// console.log(calculateArea1(8,4));
// // Exercise 52
// let smartPhone = {
//     brand: "Apple", 
//     model: "iPhone 13 pro max",
//     specs:{
//         Storage: "512 GB",
//         screenSize: "6.68 inches",
//         battery: "4,352 mAh",
//         color: "Alpine Green"
//     }
// };
// console.log(smartPhone);
// // Exercise 53
// let developerSkills = {
//     languages: ["HTML", "CSS", "Java Script", "Typescript", "Python"],
//     frameWork: ["React", "Angular", "Vue"],
//     tools: ["Git", "GitHub", "Webpack", "Gulp", "Grunt"]
// };
// // Getting specific skills from the list
// let { languages, frameWork, tools } = developerSkills;
// // showing a skills from each category
// console.log(`Languages: ${languages[0]}, FrameWorks: ${frameWork[0]}, Tools: ${tools[0]}`);
// // Exercise 54
// function creat_Object_with_dynamic_key(key: string, value: string) {
//     let dynamicObject = {};
//     // setting up a section in the list with a changeable name
//     dynamicObject[key] = value;
//     return dynamicObject;
// };
// // using the flexible list setup for a user's preference
// let userPreference = creat_Object_with_dynamic_key("Theme", "Dark");
// // showing the user's choice
// console.log(userPreference);
// // Exercise 55
// // Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// // Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.
// let numbers = [1,2,3,4,5,6,7,8,9];
// let doubleNumbers = numbers.map(numbers => numbers *2);
// console.log(doubleNumbers);
// // Exercise 56
// let mixedArray = [2, "Iphone's", 3, "MacBook's", 1, "Tablet 'Galaxy S9 ultra'", true];
// let stringArray = mixedArray.filter(item => typeof item ==="string");
// console.log(stringArray);
// // Exercise 57
// let grades = [76,89,67,75,56];
// let averageGrade = grades.reduce((total,grades) => total + grades, 0)/ grades.length;
// console.log(averageGrade);
// Exercise 58
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given.
// function averageScore(...scores: number[]): number {
//     let total = scores.reduce((sum, scores) => sum + scores, 0);
//     return total / scores.length;
// };
// console.log(averageScore(80, 90, 100, 70));
// Exercise 59
// Question 59: Add a Special Number: Make a program that creates customs adders. These adders can add a specific number to any other you give them later. This program makes a function that adds a specific number.
// function makeAdder(valueToAdd: number): (number) => number {
//     return function(number: number): number {
//         return number + valueToAdd;
//     };
// };
// let addFive = makeAdder(5);
// console.log(addFive(10));
// Exercise 60
// Question 60: Self-Running User Profile: Create a quick, self-setup profile
// for a user that can tell you the user's name and age,
// This profile sets itself up and can share info about the user.
// let userProfile = (function(){
//     let name = "Leo";
//     let age = 28;
//     return {
//         displayInfo: function() {
//             console.log(`Name: ${name}, Age: ${age}`);
//         }
//     };
// })();
// userProfile.displayInfo();
// It says the user's name and age
// We made a self-setup profile that can talk about the user.
// Exercise 61
// Question 61: Making Enums for Vehicles: let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Making a list (enums) for different types of vehicles
// enum VehicleType {
//     Car,
//     Truck,
//     Motorcycles,
//     Train,
//     Bus,
//     Plan
// };
// console.log(VehicleType.Car);
// Exercise 62
// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
// Create a blueprint (interface) for student information
// interface Student {
//     name: string;
//     age: number;
//     courses: string[];
// }
// let student: Student = {
//     name: "AZAN",
//     age: 25,
//     courses: ["Math", "Science", "History"]
// };
// console.log(student);
// Exercise 63
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special alias, including properties unique to each shape.
// • Explain & TIP:• A Ove alias lets you create a custom Ove. It's like a shortcut for describing more complex information, such as the details of
// different shapes.
// Define type aliases for Circle and Rectangle
// type Circle = {
//     kind: 'circle';
//     radius: number;
// };
// type Rectangle = {
//     kind: 'rectangle';
//     width: number;
//     height: number;
// };
// // Define a union type for Shape
// type Shape = Circle | Rectangle;
// // Function to describe a shape
// function describeShape(shape: Shape): string {
//     switch (shape.kind) {
//         case 'circle':
//             return `This is a circle with radius ${shape.radius}.`;
//         case 'rectangle':
//             return `This is a rectangle with width ${shape.width} and height ${shape.height}.`;
//         default:
//             return 'Unknown shape';
//     }
// }
// // Example usage
// const myCircle: Circle = { kind: 'circle', radius: 10 };
// const myRectangle: Rectangle = { kind: 'rectangle', width: 20, height: 15 };
// console.log(describeShape(myCircle));       // Output: This is a circle with radius 10.
// console.log(describeShape(myRectangle));    // Output: This is a rectangle with width 20 and height 15.
// Another Example
// type Shape = {
//     kind: "circle" | "rectangle";
//     redius?: number; // only for circles
//     width?: number; // only for rectangles
//     height?: number; // only for rectangles
// };
// // Describing a circle using our Shape type
// let circle: Shape = {
//     kind: "circle",
//     redius: 5
// };
// // Describing a rectangle using our Shape type
// let rectangle: Shape = {
//     kind: "rectangle",
//     width: 10,
//     height: 20
// };
// console.log(circle);
// console.log(rectangle);
// Exercise 64
// Combine Strings and Numbers: Write a function that merges a piece of text with a number.
// For Example, If provided with "Age:" and 30, it should give back "Age: 30".
// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.
// This function mixes a text and a number into one text
// function combineStringAndNumber1(text: string, number: number): string {
//     return text + number;
// }
// console.log(combineStringAndNumber1("Age: ", 45));
// Exercise 65
// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign.
//For example, reminder(5, 2) should give 1.
// function Reminder(num1: number, num2: number): number {
//     return num1 % num2
// };
// console.log(Reminder(5, 2));
// Exercise 66
// Question 66: Logical and Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator.
// For instance, checkBothTrue(true, false) should be false.
// function Check(chac1: boolean, chac2: boolean): boolean {
//     return chac1 && chac2;
// }
// console.log(Check(true, true));
// Exercise 67
// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and 1 string that represents a number (e.g, "5"). Return their sum as a number.
// function AddNumberAndString(num1: number, numString: string): number {
//     return num1 + Number(numString);
// }
// console.log(AddNumberAndString(10, "5"));
// Exercise 68
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and return their product. Round the result to two decimal places.
// function MultiplyDecimal(num1: number, num2: number): number {
//     return Math.round((num1 * num2) * 100) / 100;
// }
// console.log(MultiplyDecimal(0.1, 0.2));
// Exercise 69
// Question 69: Dividing and Finding the Reminder: Write a function that divides two numbers and return both the quotient and the reminder. Use an object to return both values.
// function reminder(dividend: number, divisor: number) : {quotient: number; reminder: number}{
//     let quotient = Math.floor(dividend / divisor);
//     let reminder = dividend % divisor;
//     return {quotient, reminder};
// };
// console.log(reminder(26, 5));
// Exercise 70
// Question 70: Understanding let in loop: Write a function that use a loop with the keyword to print numbers from 1 to 5.
// Explain how the let keyword affects the visibility of the loop variable.
// function loop() {
//     for(let index = 1; index < 6; index++) {
//         let num = index;
//         console.log(num);
//     };
// };
// loop();
// Exercise 71
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// let teacherName: string = 'Irfan Khan';
// teacherName = 'Salman Ali';
// console.log(teacherName);
// const friend: string = 'Ebad';
// friend = "Raza"; // It did'nt work because of 'const'.
// console.log(friend);
// Exercise 72
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// function blockScope() {
//     let khan = 'kpk';
// }
// console.log(khan);
// blockScope();
// // another example
// {
//     let blockLet = 'visible in curly braces';
//     let blockConst = 'visible in block';
//     console.log(blockLet);
//     console.log(blockConst);
// };
// console.log(blockLet);
// try {
//     console.log(blockLet);
// };
// try {
//     console.log(blockConst);
// };
// Exerxise 73
