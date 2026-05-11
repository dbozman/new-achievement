import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Achievement } from './achievement.model';
import { environment } from '../environments/environment';

type AchievementApiResponse = {
  achievement: {
    title: string;
    description: string;
    reward: string;
  };
};

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/ai/achievement`;

  generateAchievement(trigger: string): Observable<Achievement> {
    return this.http
      .post<AchievementApiResponse>(this.url, { trigger })
      .pipe(map((res) => Achievement.fromApi(res.achievement)));
  }
}
