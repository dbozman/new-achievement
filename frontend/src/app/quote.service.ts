import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

export interface Quote {
  id: number;
  character: string;
  text: string;
  bookNumber: number;
  chapterNumber: number;
}

export type CreateQuotePayload = Pick<
  Quote,
  'character' | 'text' | 'bookNumber' | 'chapterNumber'
>;

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/quotes`;

  getAll(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.baseUrl);
  }

  getRandom(): Observable<Quote> {
    return this.http.get<Quote>(`${this.baseUrl}/random`);
  }

  create(payload: CreateQuotePayload): Observable<Quote> {
    return this.http.post<Quote>(this.baseUrl, payload);
  }
}
