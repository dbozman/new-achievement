import { Component, inject, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { QuoteService } from '../../quote.service';

@Component({
  selector: 'app-add-quote',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-quote.component.html',
  styleUrl: './add-quote.component.scss',
})
export class AddQuoteComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly quoteService = inject(QuoteService);

  readonly quoteAdded = output<void>();

  protected readonly form = this.fb.group({
    character: ['', Validators.required],
    text: ['', Validators.required],
    bookNumber: [1, [Validators.required, Validators.min(1)]],
    chapterNumber: [
      undefined as number | undefined,
      Validators.min(1),
    ],
  });

  protected submitError = false;

  onSubmit(): void {
    this.submitError = false;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { character, text, bookNumber, chapterNumber } =
      this.form.getRawValue();
    const payload = {
      character,
      text,
      bookNumber,
      ...(chapterNumber != null && chapterNumber > 0
        ? { chapterNumber }
        : {}),
    };

    this.quoteService.create(payload).subscribe({
      next: () => {
        this.form.reset({
          character: '',
          text: '',
          bookNumber: 1,
          chapterNumber: undefined,
        });
        this.quoteAdded.emit();
      },
      error: () => {
        this.submitError = true;
      },
    });
  }
}
