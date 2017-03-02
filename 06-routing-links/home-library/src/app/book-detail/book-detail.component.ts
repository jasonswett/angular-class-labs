import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: string;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.book = this.bookService.getBook(+params['id'])
      });
  }

}
