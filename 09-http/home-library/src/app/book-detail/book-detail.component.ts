import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: { id: number, name: string };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private http: Http
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.book = this.bookService.getBook(+params['id'])

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.get('http://www.mocky.io/v2/58baca260f00003a0ee1685c').subscribe(res => {
          console.log(res);
        });
      });
  }

}
