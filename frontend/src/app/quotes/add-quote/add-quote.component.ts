import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import {
  QuoteFormBookOption,
  QuoteService,
  QuoteStatus,
  SubmitQuoteResponse,
} from '../../quote.service';

const STATUS_LABELS: Record<QuoteStatus, string> = {
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
  REVIEW: 'Marked for review',
  PENDING: 'Pending',
};

@Component({
  selector: 'app-add-quote',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './add-quote.component.html',
  styleUrl: './add-quote.component.scss',
})
export class AddQuoteComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly quoteService = inject(QuoteService);
  private readonly destroyRef = inject(DestroyRef);

  readonly quoteAdded = output<void>();

  protected readonly characters = signal<string[]>([]);
  protected readonly books = signal<QuoteFormBookOption[]>([]);
  protected readonly chapterOptions = signal<number[]>([]);

  protected readonly optionsLoading = signal(true);
  protected readonly optionsError = signal(false);
  protected readonly submitting = signal(false);
  protected readonly submitError = signal(false);
  protected readonly successResult = signal<SubmitQuoteResponse | null>(null);

  protected readonly form = this.fb.group({
    character: ['', Validators.required],
    text: ['', Validators.required],
    bookNumber: this.fb.control<number | null>(null, Validators.required),
    chapterNumber: this.fb.control<number | null>(
      { value: null, disabled: true },
      Validators.required,
    ),
  });

  ngOnInit(): void {
    this.quoteService.getFormOptions().subscribe({
      next: (options) => {
        this.characters.set(options.characters);
        this.books.set(options.books);
        this.optionsLoading.set(false);
        this.optionsError.set(false);
      },
      error: () => {
        this.optionsLoading.set(false);
        this.optionsError.set(true);
      },
    });

    this.form.controls.bookNumber.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((bookId) => this.onBookChange(bookId));
  }

  protected statusLabel(status: QuoteStatus | undefined): string {
    return status ? STATUS_LABELS[status] : 'Submitted';
  }

  protected onSubmit(): void {
    this.submitError.set(false);
    this.successResult.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { character, text, bookNumber, chapterNumber } =
      this.form.getRawValue();

    if (
      !character ||
      !text ||
      bookNumber == null ||
      chapterNumber == null
    ) {
      return;
    }

    this.submitting.set(true);

    this.quoteService
      .create({
        character,
        text,
        bookNumber: Number(bookNumber),
        chapterNumber: Number(chapterNumber),
      })
      .subscribe({
        next: (result) => {
          this.submitting.set(false);
          this.successResult.set(result);
          this.form.reset({
            character: '',
            text: '',
            bookNumber: null,
            chapterNumber: null,
          });
          this.form.controls.chapterNumber.disable();
          this.chapterOptions.set([]);
          this.quoteAdded.emit();
        },
        error: () => {
          this.submitting.set(false);
          this.submitError.set(true);
        },
      });
  }

  private onBookChange(bookId: number | null): void {
    const chapterControl = this.form.controls.chapterNumber;
    chapterControl.setValue(null);

    if (bookId == null) {
      this.chapterOptions.set([]);
      chapterControl.disable();
      return;
    }

    const book = this.books().find((b) => b.id === bookId);
    if (!book) {
      this.chapterOptions.set([]);
      chapterControl.disable();
      return;
    }

    this.chapterOptions.set(
      Array.from({ length: book.maxChapters }, (_, index) => index + 1),
    );
    chapterControl.enable();
  }
}
