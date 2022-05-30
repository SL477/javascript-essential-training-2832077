/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Jacket from "./Jacket.js";
import Backpack from "./Backpack.js";
import Keys from "./Keys.js";

const k = new Keys();

const b = new Backpack('posh', 25, 'blue', 3, 15, 15, false);

const j = new Jacket('black', true, 2);
j.contents.push(k);
console.log(j)