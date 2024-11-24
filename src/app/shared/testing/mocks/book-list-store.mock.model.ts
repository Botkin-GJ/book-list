import { bookList, BookListState } from "../../../store/book-list/book-list.reducer";

export const bookListStateMock: BookListState = {

}

export const bookListStoreMock: {'book-list': BookListState} = {
    [bookList]: bookListStateMock,
}