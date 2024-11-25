import { Component, OnInit } from '@angular/core';
import { BookListDisplayPcComponent } from "../book-list-display-pc/book-list-display-pc.component";
import { Store } from '@ngrx/store';
import { BooksViewModel } from '../../../../shared/models/book.model';
import { booksViewModelSelector } from '../../../../store/book-list/book-list.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import * as fromBookListActions from '../../../../store/book-list/book-list.actions';

@Component({
  selector: 'app-book-list-display-cc',
  standalone: true,
  imports: [
    BookListDisplayPcComponent,
    AsyncPipe
  ],
  templateUrl: './book-list-display-cc.component.html',
  styleUrl: './book-list-display-cc.component.scss'
})
export class BookListDisplayCcComponent implements OnInit {

  books$: Observable<BooksViewModel[]> = this.store.select(booksViewModelSelector);

  constructor(readonly store: Store) {}

  ngOnInit(): void {
    this.triggerBooksRequest();
  }

  private triggerBooksRequest(): void {
    this.store.dispatch(fromBookListActions.booksRequested())
  }
}
