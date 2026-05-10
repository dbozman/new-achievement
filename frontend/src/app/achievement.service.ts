import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

export interface AchievementResponse {
  achievement: string;
}

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/ai/achievement`;

  generateAchievement(trigger: string): Observable<AchievementResponse> {
    return this.http.post<AchievementResponse>(this.url, { trigger });
  }
}
