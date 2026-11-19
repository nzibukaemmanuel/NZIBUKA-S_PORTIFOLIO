import { Component, ElementRef, effect, inject, signal, viewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
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
  private readonly http = inject(HttpClient);

  private readonly endpoint = 'https://formsubmit.co/ajax/emmynzibk21@gmail.com';

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
      const { name, email, message } = this.form.getRawValue();
      const res = await firstValueFrom(
        this.http.post<{ success?: string | boolean }>(this.endpoint, {
          name,
          email,
          message,
          _replyto: email,
          _subject: `Portfolio message from ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      );
      if (String(res?.success) !== 'true') throw new Error('Send failed');
      this.state.set('success');
    } catch {
      this.state.set('error');
    }
  }
}
