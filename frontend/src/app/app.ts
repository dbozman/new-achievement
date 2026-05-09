import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuoteListComponent, AddQuoteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
