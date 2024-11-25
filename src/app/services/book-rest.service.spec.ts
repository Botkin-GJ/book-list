import { TestBed } from '@angular/core/testing';

import { BookRestService } from './book-rest.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { mockBooks } from '../shared/testing/mocks/book.mock.model';

describe('BookRestService', () => {
  let service: BookRestService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(BookRestService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getBooks', () => {
    const endpoint = 'https://63c10327716562671870f959.mockapi.io/books';

    it('should call correct endpoint', () => {
      const expected = endpoint;
      const books$ = service.getBooks();
      firstValueFrom(books$);

      const req = httpTesting.expectOne(expected);

      req.flush(mockBooks);

      expect(req.request.url).toBe(expected);
      
      httpTesting.verify();
    });
    
    it('should use correct req method', () => {
      const expected = 'GET';
      const books$ = service.getBooks();
      firstValueFrom(books$);

      const req = httpTesting.expectOne(endpoint);

      req.flush(mockBooks);

      expect(req.request.method).toBe(expected);

      httpTesting.verify();
    });

    it('should return books', async () => {
      const expected = mockBooks;
      const books$ = service.getBooks();
      const booksPromise = firstValueFrom(books$);

      const req = httpTesting.expectOne(endpoint);

      req.flush(mockBooks);

      expect(await booksPromise).toEqual(expected);

      httpTesting.verify();
    });
  });

  describe('addBook', () => {
    const endpoint = 'https://63c10327716562671870f959.mockapi.io/books';

    it('should call correct endpoint', () => {
      const expected = endpoint;
      const books$ = service.addBook(mockBooks[0]);
      firstValueFrom(books$);

      const req = httpTesting.expectOne(expected);

      req.flush(mockBooks[0]);

      expect(req.request.url).toBe(expected);
      
      httpTesting.verify();
    });
    
    it('should use correct req method', () => {
      const expected = 'POST';
      const books$ = service.addBook(mockBooks[0]);
      firstValueFrom(books$);

      const req = httpTesting.expectOne(endpoint);

      req.flush(mockBooks);

      expect(req.request.method).toBe(expected);

      httpTesting.verify();
    });

    it('should use correct body', () => {
      const expected = mockBooks[0];
      const books$ = service.addBook(mockBooks[0]);
      firstValueFrom(books$);

      const req = httpTesting.expectOne(endpoint);

      req.flush(mockBooks);

      expect(req.request.body).toBe(expected);

      httpTesting.verify();
    });

    it('should return book', async () => {
      const expected = mockBooks[0];
      const books$ = service.addBook(mockBooks[0]);
      const booksPromise = firstValueFrom(books$);

      const req = httpTesting.expectOne(endpoint);

      req.flush(mockBooks[0]);

      expect(await booksPromise).toEqual(expected);

      httpTesting.verify();
    });
  });
});
