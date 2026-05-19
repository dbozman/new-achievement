import { Component } from '@angular/core';
import { QuoteListComponent } from './quote-list/quote-list.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [QuoteListComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent {}
