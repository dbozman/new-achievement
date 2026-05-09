import { Component, inject, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-add-quote',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-quote.component.html',
  styleUrl: './add-quote.component.css',
})
export class AddQuoteComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly quoteService = inject(QuoteService);

  readonly quoteAdded = output<void>();

  protected readonly form = this.fb.group({
    character: ['', Validators.required],
    text: ['', Validators.required],
    bookNumber: [1, [Validators.required, Validators.min(1)]],
    chapterNumber: [1, [Validators.required, Validators.min(1)]],
  });

  protected submitError = false;

  onSubmit(): void {
    this.submitError = false;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.quoteService.create(this.form.getRawValue()).subscribe({
      next: () => {
        this.form.reset({
          character: '',
          text: '',
          bookNumber: 1,
          chapterNumber: 1,
        });
        this.quoteAdded.emit();
      },
      error: () => {
        this.submitError = true;
      },
    });
  }
}
