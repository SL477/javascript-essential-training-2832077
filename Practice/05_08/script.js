/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

let h = document.querySelector(".page-header__heading");


h.classList.add("test");
h.classList.add("test2");
h.classList.remove("test");
console.log(h);

h.setAttribute("style", 'color:green');

//h.attributes

//console.log(h.attributes);
let i = document.querySelector("img");
console.log(i.getAttribute("src"));

console.log('alt', i.getAttribute("alt"));

i.setAttribute('alt', "An image");

console.log('alt', i.getAttribute("alt"));