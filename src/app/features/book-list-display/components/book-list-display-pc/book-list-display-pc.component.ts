import { Component, Input } from '@angular/core';
import { BooksViewModel } from '../../../../shared/models/book.model';
import { MatCardModule } from '@angular/material/card'; 
import { MatDivider } from '@angular/material/divider';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-book-list-display-pc',
  standalone: true,
  imports: [MatCardModule, MatDivider, TranslatePipe, MatButtonModule],
  providers: [],
  templateUrl: './book-list-display-pc.component.html',
  styleUrl: './book-list-display-pc.component.scss',
})
export class BookListDisplayPcComponent {
  Math = Math;

  @Input()
  books: BooksViewModel[] = [];

  constructor(readonly addBookDialog: MatDialog) { }

  openAddBookDialog(): void {
    const dialogRef = this.addBookDialog.open(AddBookDialogComponent)
  }
}
