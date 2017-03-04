import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'authors', component: AuthorListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class HomeLibraryRoutingModule { }
