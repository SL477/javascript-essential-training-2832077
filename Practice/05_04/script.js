/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
let backpackName = document.querySelector(".backpack__name");
console.log(backpackName.textContent);

backpackName.textContent = "Posh Backpack";

let bpvols = document.querySelectorAll(".backpack__volume");
bpvols.forEach(element => {
    console.log(element.textContent);
});

let frogPack = document.getElementById("pack02");

let frogAge = frogPack.querySelector(".backpack__age");
console.log(frogAge.textContent);