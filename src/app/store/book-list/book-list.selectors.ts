import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bookList, BookListState } from "./book-list.reducer";
import { BooksGrouped, BooksViewModel, DecadeGroup } from "../../shared/models/book.model";

export const bookListFeatureSelector = createFeatureSelector<BookListState>(bookList);

export const booksGroupedSelector = createSelector(bookListFeatureSelector, (state: BookListState) => state.booksGrouped);

export const booksViewModelSelector = createSelector(booksGroupedSelector, (booksGrouped: BooksGrouped) => {
    const decadeGroups = mapBooksToDecadeGroups(booksGrouped);

    const decadeGroupsSorted = sortDecateGroupsByDecadeDesc(decadeGroups);
    
    const booksViewModelEnrichedByEmptyDecades = enrichDecadeGroupsByEmptyDecadeRanges(decadeGroupsSorted);

    return booksViewModelEnrichedByEmptyDecades;
});

function mapBooksToDecadeGroups(booksGrouped: BooksGrouped): DecadeGroup[] {
    return Object.entries(booksGrouped).map(([decade, books]) => ({
        decade: parseInt(decade),
        books
    }));
}

function sortDecateGroupsByDecadeDesc(decadeGroups: DecadeGroup[]): DecadeGroup[] {
    return structuredClone(decadeGroups).sort((a, b) => (b.decade - a.decade));
}

function enrichDecadeGroupsByEmptyDecadeRanges(decadeGroups: DecadeGroup[]): BooksViewModel[] {
    return decadeGroups.flatMap((element, index) => {
        const currentElementDecade = element.decade;
        const nextElementDecade =
            index < decadeGroups.length - 1 ? decadeGroups[index + 1].decade : currentElementDecade;
        
        const decadeDelta = currentElementDecade - nextElementDecade;
        
        const elements: BooksViewModel[] = [
            {to: currentElementDecade + 9, from: currentElementDecade, books: element.books}
        ];
        
        if(decadeDelta > 10) {
            elements.push(
                {
                    to: currentElementDecade - 1,
                    from: nextElementDecade + 10,
                    books: []
                }
            )}

        return elements;
    });
}