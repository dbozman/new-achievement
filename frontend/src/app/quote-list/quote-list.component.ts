import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { Quote, QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './quote-list.component.html',
  styleUrl: './quote-list.component.css',
})
export class QuoteListComponent implements OnInit {
  private readonly quoteService = inject(QuoteService);
  protected readonly displayedColumns = [
    'id',
    'character',
    'text',
    'bookNumber',
    'chapterNumber',
  ];

  protected readonly quotes = signal<Quote[]>([]);
  protected readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.errorMessage.set(null);
    this.quoteService.getAll().subscribe({
      next: (quotes) => this.quotes.set(quotes),
      error: () =>
        this.errorMessage.set('Could not load quotes. Is the API running?'),
    });
  }
}
