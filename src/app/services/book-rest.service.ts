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

  constructor(readonly http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    const url = `${this.apiUrl}${this.booksEndpoint}`;
    return this.http.get<Book[]>(url);
  }
}
