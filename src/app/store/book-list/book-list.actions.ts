import { createAction, props } from "@ngrx/store";
import { Book } from "../../shared/models/book.model";

export const booksRequested = createAction('[Book List] Books requested.');
export const bookAdditionRequested = createAction('[Book List] Book addition requested.', props<{book: Book}>());

export const booksLoaded = createAction('[Book List] Books loaded successfully.', props<{books: Book[]}>());
export const booksLoadingFailed = createAction('[Book List] Books loading failed.');

export const bookAdded = createAction('[Book List] Books added successfully.', props<{book: Book}>());
export const bookAdditionFailed = createAction('[Book List] Books addition failed.');