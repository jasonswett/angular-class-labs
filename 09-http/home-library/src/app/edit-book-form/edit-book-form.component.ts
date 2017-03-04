import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.css']
})
export class EditBookFormComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
