import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDisplayPcComponent } from './book-list-display-pc.component';

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
});
