import { createAction, props } from "@ngrx/store";
import { Book } from "../../shared/models/book.model";

export const booksRequested = createAction('[Book List] Books requested.');

export const booksLoaded = createAction('[Book List] Books loaded successfully.', props<{books: Book[]}>());
export const booksLoadingFailed = createAction('[Book List] Books loading failed.');