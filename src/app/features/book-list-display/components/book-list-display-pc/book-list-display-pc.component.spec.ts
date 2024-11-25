import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDisplayPcComponent } from './book-list-display-pc.component';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';

describe('BookListDisplayPcComponent', () => {
  let component: BookListDisplayPcComponent;
  let fixture: ComponentFixture<BookListDisplayPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListDisplayPcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListDisplayPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openAddBookDialog', () => {
    it('should call MatDialog with correct component', () => {
      const expected = AddBookDialogComponent;
      const spy = spyOn(component.addBookDialog, 'open').and.callThrough();

      component.openAddBookDialog();

      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});
