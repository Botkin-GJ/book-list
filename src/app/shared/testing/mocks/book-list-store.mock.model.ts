import { provideMockStore } from "@ngrx/store/testing";
import * as fromBookListReducer from "../../../store/book-list/book-list.reducer";

export const bookListStateMock: fromBookListReducer.BookListState = {
    booksGrouped: {}
}

export const bookListStoreMock: {'book-list': fromBookListReducer.BookListState} = {
    [fromBookListReducer.bookList]: bookListStateMock,
}

export const provideBookListMockStore = provideMockStore({
    initialState: {
        [fromBookListReducer.bookList]: fromBookListReducer.initialState
    }
})