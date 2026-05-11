import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AchievementGeneratorComponent } from './achievement-generator/achievement-generator.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    QuoteListComponent,
    AddQuoteComponent,
    AchievementGeneratorComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
