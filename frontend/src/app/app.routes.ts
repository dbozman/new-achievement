import { Routes } from '@angular/router';

import { AchievementGeneratorComponent } from './achievement-generator/achievement-generator.component';
import { QuotesComponent } from './quotes/quotes.component';

export const routes: Routes = [
  { path: '', component: AchievementGeneratorComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
