import { Component, ElementRef, effect, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  imports: [ReactiveFormsModule, RevealOnScroll],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly state = signal<SubmitState>('idle');

  private readonly successPanel = viewChild<ElementRef<HTMLElement>>('successPanel');

  constructor() {
    effect(() => {
      const panel = this.successPanel();
      if (this.state() === 'success' && panel) panel.nativeElement.focus();
    });
  }

  async submit(): Promise<void> {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.state.set('sending');
    try {
      // No backend configured yet — simulate the round trip.
      await new Promise((resolve) => setTimeout(resolve, 900));
      this.state.set('success');
    } catch {
      this.state.set('error');
    }
  }
}
