import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor() { }

  getList() {
    return [
      'Of Mice and Men',
      'The Grapes of Wrath'
    ];
  }
}
