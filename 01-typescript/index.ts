class Author {
  constructor(public name: string) { }
}

class Book {
  constructor(public title: string, public author: Author) { }

  description() {
    return `${this.title} by ${this.author.name}`;
  }
}

window.onload = function() {
  var johnSteinbeck = new Author('John Steinbeck');
  var ofMiceAndMen = new Book('Of Mice and Men', johnSteinbeck);

  document.getElementById('content').innerHTML = ofMiceAndMen.description();
};
