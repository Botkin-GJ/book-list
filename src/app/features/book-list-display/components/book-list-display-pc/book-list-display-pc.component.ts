import { Component, Input } from '@angular/core';
import { BooksViewModel } from '../../../../shared/models/book.model';
import { MatCardModule } from '@angular/material/card'; 
import { MatDivider } from '@angular/material/divider';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-book-list-display-pc',
  standalone: true,
  imports: [MatCardModule, MatDivider, TranslatePipe],
  providers: [],
  templateUrl: './book-list-display-pc.component.html',
  styleUrl: './book-list-display-pc.component.scss',
})
export class BookListDisplayPcComponent {
  Math = Math;

  @Input()
  books: BooksViewModel[] = [];
}
