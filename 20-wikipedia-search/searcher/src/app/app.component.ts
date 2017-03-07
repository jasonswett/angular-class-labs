import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaService]
})
export class AppComponent {
  items: Observable<string[]>;

  constructor (private wikipediaService: WikipediaService) { }

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }
}
