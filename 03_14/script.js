/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const books = [
  new Book('Dune', "Frank"),
  new Book('I Robot', "Issac Asimov"),
  new Book('Star Wars', 'George Lucas'),
  new Book('Mysterious Affair at Styles', 'Agatha Cristie'),
  new Book('Study in scarlet', 'Arthur Conan Doyle'),
]

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

books.forEach(element => {
  console.log('Author: ' + element.author + ', title: ' + element.title);
});