import { Routes } from '@angular/router';

import { AchievementGeneratorComponent } from './achievement-generator/achievement-generator.component';
import { QuotesPageComponent } from './quotes-page/quotes-page.component';

export const routes: Routes = [
  { path: '', component: AchievementGeneratorComponent },
  { path: 'quotes', component: QuotesPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
