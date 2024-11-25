import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bookList, BookListState } from "./book-list.reducer";
import { BooksGrouped, BooksViewModel } from "../../shared/models/book.model";

export const bookListFeatureSelector = createFeatureSelector<BookListState>(bookList);

export const booksGroupedSelector = createSelector(bookListFeatureSelector, (state: BookListState) => state.booksGrouped);

// TODO: Split into more digestable functions.
export const booksViewModelSelector = createSelector(booksGroupedSelector, (booksGrouped: BooksGrouped) => {
    const booksMappedToViewModel = Object.entries(booksGrouped).map(([decade, books]) => ({
        decade: parseInt(decade),
        books
    }));

    const booksSortedByDecadeDesc = structuredClone(booksMappedToViewModel).sort((a, b) => (b.decade - a.decade));
    
    const booksViewModelEnrichedByEmptyDecades = booksSortedByDecadeDesc.flatMap((element, index) => {
        const currentElementDecade = element.decade;
        const nextElementDecade =
            index < booksSortedByDecadeDesc.length - 1 ? booksSortedByDecadeDesc[index + 1].decade : currentElementDecade;
        
        const decadeDelta = currentElementDecade - nextElementDecade;
        
        const elements: BooksViewModel[] = [
            {from: currentElementDecade + 9, to: currentElementDecade, books: element.books}
        ];
        

        if(decadeDelta > 10) {
            elements.push(
                {
                    from: currentElementDecade - 1,
                    to: nextElementDecade + 10,
                    books: []
                }
            )}

        return elements;
    });

    return booksViewModelEnrichedByEmptyDecades;
});

