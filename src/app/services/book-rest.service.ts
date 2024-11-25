import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookRestService {

  private apiUrl = 'https://63c10327716562671870f959.mockapi.io';
  private booksEndpoint = '/books';
  private booksUrl = `${this.apiUrl}${this.booksEndpoint}`;

  constructor(readonly http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book);
  }
}
