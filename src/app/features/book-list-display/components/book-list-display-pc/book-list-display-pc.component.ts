import { Component, Input } from '@angular/core';
import { BooksViewModel } from '../../../../shared/models/book.model';

@Component({
  selector: 'app-book-list-display-pc',
  standalone: true,
  imports: [],
  templateUrl: './book-list-display-pc.component.html',
  styleUrl: './book-list-display-pc.component.scss'
})
export class BookListDisplayPcComponent {

  @Input()
  books: BooksViewModel[] = [];
}
