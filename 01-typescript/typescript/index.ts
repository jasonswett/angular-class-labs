class Book {
  constructor(public title: string, public yearPublished: number) { }
}

class Author {
  public books: Book[] = [];

  constructor(public name: string) { }

  addBook(book: Book) {
    this.books.push(book);
  }

  booksOrderedByTitle() { }
  booksOrderedByYearPublished() { }
}

window.onload = function() {
  var author = new Author('John Steinbeck');

  author.addBook(new Book('Of Mice and Men', 1937));
  author.addBook(new Book('The Grapes of Wrath', 1939));
  author.addBook(new Book('East of Eden', 1952));

  author.books.forEach(function(book) {
    console.log(book.title);
  });
};
