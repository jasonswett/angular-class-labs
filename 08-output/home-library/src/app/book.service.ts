import { Injectable } from '@angular/core';

@Injectable()
export class BookService {
  books: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'Of Mice and Men'
    },
    {
      id: 2,
      name: 'The Grapes of Wrath'
    }
  ];

  constructor() { }

  getList() {
    return this.books;
  }

  getBook(id: number) {
    return this.books.find(book => book.id === id);
  }
}
