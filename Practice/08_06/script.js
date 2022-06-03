/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
function articleCreator(data) {
    //let a = `<article>${data.text}</article>`;
    let a = document.createElement('article');

    a.innerHTML = data.text;
    a.classList.add(data.class);
    document.querySelector('main').appendChild(a);
}

articleCreator({text: 'hi', class: 'test'});

const articleCreator2 = (data) => {
    //let a = `<article>${data.text}</article>`;
    let a = document.createElement('article');

    a.innerHTML = data.text;
    a.classList.add(data.class);
    document.querySelector('main').appendChild(a);
};

articleCreator({text: 'arrow', class: 'test2'});