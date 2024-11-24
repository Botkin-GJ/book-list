import { createReducer } from '@ngrx/store';
import * as BookListActions from './book-list.actions';
import { Book } from '../../shared/models/book.model';

export const bookList = 'book-list';

export interface BookListState {
}

export const initialState: BookListState = {
}

export const bookListReducer = createReducer(
    initialState,
);