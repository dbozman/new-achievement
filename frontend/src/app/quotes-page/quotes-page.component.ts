import { Component } from '@angular/core';

import { AddQuoteComponent } from '../add-quote/add-quote.component';
import { QuoteListComponent } from '../quote-list/quote-list.component';

@Component({
  selector: 'app-quotes-page',
  standalone: true,
  imports: [QuoteListComponent, AddQuoteComponent],
  templateUrl: './quotes-page.component.html',
  styleUrl: './quotes-page.component.scss',
})
export class QuotesPageComponent {}
