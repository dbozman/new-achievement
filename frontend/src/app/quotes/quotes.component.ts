import { Component } from '@angular/core';

import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [QuoteListComponent, AddQuoteComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent {}
