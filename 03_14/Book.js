class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    retitle(title) {
        this.title = title;
    }

    reauthor(author) {
        this.author = author;
    }
}
export default Book;