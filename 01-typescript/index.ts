class Author {
  books: Book[] = [];

  constructor(private name: string) { }

  addBook(book: Book) {
    this.books.push(book);
  }
}

class Book {
  constructor(public title: string) { }
}

window.onload = function() {
  var author = new Author('John Steinbeck');

  author.addBook(new Book('Of Mice and Men'));
  author.addBook(new Book('The Grapes of Wrath'));

  author.books.forEach(function(book) {
    console.log(book.title);
  });
};
