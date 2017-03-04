import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: { name: string }[];

  constructor(private http: Http) { }

  ngOnInit() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get('http://www.mocky.io/v2/58bae0cf0f00004810e1686b')
      .map(res => res.json())
      .subscribe(authors => {
        this.authors = authors;
      });
  }

}
