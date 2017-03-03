import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: { id: number, name: string }[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getList();
  }

}
