import { createFeatureSelector } from "@ngrx/store";
import { bookList, BookListState } from "./book-list.reducer";

export const bookListFeatureSelector = createFeatureSelector<BookListState>(bookList);