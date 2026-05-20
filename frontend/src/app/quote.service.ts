import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

export type QuoteStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'REVIEW';

export interface Quote {
  id: number;
  character: string;
  text: string;
  bookNumber: number;
  chapterNumber?: number | null;
  status?: QuoteStatus;
}

export type CreateQuotePayload = Pick<
  Quote,
  'character' | 'text' | 'bookNumber'
> & {
  chapterNumber?: number;
};

export interface SubmitQuoteResponse {
  quote: Quote;
  reasoning: string;
}

export interface QuoteFormBookOption {
  id: number;
  title: string;
  maxChapters: number;
}

export interface QuoteFormOptions {
  characters: string[];
  books: QuoteFormBookOption[];
}

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

  getFormOptions(): Observable<QuoteFormOptions> {
    return this.http.get<QuoteFormOptions>(`${this.baseUrl}/form-options`);
  }

  create(payload: CreateQuotePayload): Observable<SubmitQuoteResponse> {
    return this.http.post<SubmitQuoteResponse>(this.baseUrl, payload);
  }
}
