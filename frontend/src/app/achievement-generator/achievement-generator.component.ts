import { DOCUMENT } from '@angular/common';
import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AchievementService } from '../achievement.service';

@Component({
  selector: 'app-achievement-generator',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './achievement-generator.component.html',
  styleUrl: './achievement-generator.component.scss',
})
export class AchievementGeneratorComponent {
  private readonly achievementService = inject(AchievementService);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private static nextDisplayId = 0;

  protected readonly trigger = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(1)],
  });

  protected readonly loading = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  /** Each successful response gets a new id so the panel DOM is recreated and CSS animation replays. */
  protected readonly display = signal<{ id: number; text: string } | null>(
    null,
  );

  protected readonly displayRows = computed(() => {
    const d = this.display();
    return d ? [d] : [];
  });

  protected readonly isDisplaying = computed(() => this.display() !== null);

  constructor() {
    effect(() => {
      const active = this.isDisplaying();
      this.document.body.classList.toggle('achievement-overlay-active', active);
    });

    this.destroyRef.onDestroy(() => {
      this.document.body.classList.remove('achievement-overlay-active');
    });
  }

  protected generate(): void {
    const raw = this.trigger.value.trim();
    if (!raw || this.trigger.invalid) {
      this.trigger.markAsTouched();
      return;
    }

    this.errorMessage.set(null);
    this.loading.set(true);

    this.achievementService.generateAchievement(raw).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.display.set({
          id: ++AchievementGeneratorComponent.nextDisplayId,
          text: res.achievement,
        });
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set(
          'Could not generate an achievement. Check your API key and network.',
        );
      },
    });
  }

  protected dismiss(): void {
    this.display.set(null);
  }
}
