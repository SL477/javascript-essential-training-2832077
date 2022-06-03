/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


const arr = [
    'Coca-Cola',
    'Glass',
    'Paper',
    'Screen',
    'Speakers',
    'Printer',
    'TV',
    'Remote'
];

let lst = arr.pop();
arr.unshift(lst);
console.log(arr);
arr.sort();

console.log(arr);

let g = arr.findIndex(i => i == 'Glass');
console.log(arr.indexOf('Glass'));
console.log(g);
arr.splice(g, 1);
console.log(arr);