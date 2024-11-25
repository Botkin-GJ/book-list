import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { TranslatePipe } from '@ngx-translate/core';
import { Book } from '../../../../shared/models/book.model';
import * as fromBookListActions from '../../../../store/book-list/book-list.actions';

@Component({
  selector: 'app-add-book-dialog',
  standalone: true,
  imports: [
    TranslatePipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './add-book-dialog.component.html',
  styleUrl: './add-book-dialog.component.scss',
})
export class AddBookDialogComponent {
  PUBLISH_YEAR_VALIDATION_PATTERN = '^(0|-?[1-9][0-9]{0,3})$'

  addBookForm = this.fb.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    category: ['', Validators.required],
    publishYear: ['', [Validators.required, Validators.pattern(this.PUBLISH_YEAR_VALIDATION_PATTERN)]]
  })

  constructor(readonly fb: FormBuilder, readonly store: Store, readonly dialogRef: MatDialogRef<AddBookDialogComponent>) {}

  onSubmit() {
    if(Object.values(this.addBookForm.value).some((value) => !value)) {
      this.addBookForm.reset();
      return;
    }

    const book: Book = {
      name: this.addBookForm.value.name!,
      author: this.addBookForm.value.author!,
      category: this.addBookForm.value.category!,
      publishYear: parseInt(this.addBookForm.value.publishYear!)
    };
    
    const onSuccessFn = () => this.dialogRef.close();

    this.store.dispatch(
      fromBookListActions.bookAdditionRequested({
        book,
        onSuccessFn
      })
    );
  }

  onClose() {
    this.dialogRef.close();
  }
}
