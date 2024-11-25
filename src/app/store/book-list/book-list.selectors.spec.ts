import * as fromBookListSelectors from "./book-list.selectors";
import * as fromBookListReducer from "./book-list.reducer";
import { mockBooksGroupedByDecade, mockBooksViewModel } from "../../shared/testing/mocks/book.mock.model";
import { BooksViewModel } from "../../shared/models/book.model";

describe('BookListSelectors', () => {
    describe('bookGroupedSelector', () => {
        it('should return booksGrouped from store', () => {
            const mockState: fromBookListReducer.BookListState = {
                ...fromBookListReducer.initialState,
                booksGrouped: mockBooksGroupedByDecade
            }
    
            const expected = mockBooksGroupedByDecade;
    
            const actual = fromBookListSelectors.booksGroupedSelector.projector(mockState);
    
            expect(actual).toEqual(expected);
        });
    });

    describe('booksViewModelSelector', () => {
        it('should return books from store mapped to ViewModel', () => {
            const expected: BooksViewModel[] = mockBooksViewModel;

            const actual = fromBookListSelectors.booksViewModelSelector.projector(mockBooksGroupedByDecade);

            expect(actual).toEqual(expected);
        });
    });
});