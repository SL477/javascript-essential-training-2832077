/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a 
 * highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your 
 * mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is 
 * clicked.
 * - Add an event listener to a specific key on the keyboard to change the background 
 * color of the whole page - from dark to light and back again.
 */

const GRID = document.querySelector(".grid");
GRID.addEventListener("mouseenter", (r) => {
    //console.log(r);
    GRID.style.outline = '5px solid black';
});

GRID.addEventListener("mouseleave", () => {
    GRID.style.outline = '';
});

for (let i = 1; i < 29; i++) {
    let f = i.toString();
    if (i < 10){
        f = '0' + f;
    }
    let g = document.querySelector('.cell' + f);
    
    g.addEventListener("mouseenter", () => {
        g.style.outline = '5px solid red';
    });

    g.addEventListener("mouseleave", () => {
        g.style.outline = '';
    });

    g.addEventListener("click", () => {
        g.style.backgroundColor = "black";
    });
}
let back = false;
document.body.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key == ' ') {
        if (!back) {
            document.body.style.backgroundColor = 'blue';
            back = true;
        }
        else {
            document.body.style.backgroundColor = '';
            back = false;
        }
    }
});