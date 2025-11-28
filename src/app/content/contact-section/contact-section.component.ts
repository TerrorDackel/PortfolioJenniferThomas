import { Component, AfterViewInit, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { scrollUp } from '../../utils/scroll-to';
import { setReturnAnchor } from '../../utils/scroll-memory';
import { observeAnimationReveal } from '../../utils/scroll-animations';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [TranslatePipe, ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.sass'
})
export class ContactSectionComponent implements AfterViewInit {
    private fb = inject(FormBuilder);
    private http = inject(HttpClient);
    private router = inject(Router);

    contactForm = this.fb.group(
        {
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required],
            privacy: this.fb.control(false, {
                validators: Validators.requiredTrue,
                updateOn: 'change'
            })
        },
        { updateOn: 'blur' }
    );

    submitted = false;
    formSuccess = false;
    formError = false;

    focusedField: 'name' | 'email' | 'message' | null = null;

    ngAfterViewInit(): void {
        observeAnimationReveal('reveal-zoom', 1000);
    }

    private isEmpty(ctrl: 'name' | 'email' | 'message'): boolean {
        const v = this.contactForm.get(ctrl)?.value as string | null | undefined;
        return !v || v.trim() === '';
    }

    showInlineRequired(ctrl: 'name' | 'email' | 'message'): boolean {
        const c = this.contactForm.get(ctrl);
        return !!(
            c &&
            c.touched &&
            c.invalid &&
            this.isEmpty(ctrl) &&
            this.focusedField !== ctrl
        );
    }

    onFocus(field: 'name' | 'email' | 'message'): void {
        this.focusedField = field;
    }

    onBlur(field: 'name' | 'email' | 'message'): void {
        if (this.focusedField === field) {
            this.focusedField = null;
        }
    }

    onPrivacyClick(): void {
        const el = document.activeElement as HTMLElement | null;
        if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.blur();
        }
        this.contactForm.updateValueAndValidity();
    }

    onPrivacyLinkClick(event: MouseEvent): void {
        event.preventDefault();
        this.navigateTo('/privacy-policy');
    }

    onPrivacyLinkKeydown(event: KeyboardEvent): void {
        const key = event.key;
        if (key === 'Enter' || key === ' ') {
            event.preventDefault();
            this.navigateTo('/privacy-policy');
        }
    }

    onBackToTopKeydown(event: KeyboardEvent): void {
        const key = event.key;
        if (key === 'Enter' || key === ' ') {
            event.preventDefault();
            this.scrollUp();
        }
    }

    onSubmit(): void {
        this.submitted = true;
        this.formSuccess = false;
        this.formError = false;

        if (!this.contactForm.valid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        const formData = this.contactForm.value;
        const body = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        const formspreeEndpoint = 'https://formspree.io/f/xyzedkbw';
        this.http.post(formspreeEndpoint, body).subscribe({
            next: () => {
                this.formSuccess = true;
                this.contactForm.reset();
                this.submitted = false;
                setTimeout(() => {
                    this.formSuccess = false;
                }, 5000);
            },
            error: () => {
                this.formError = true;
            }
        });
    }

    scrollUp(): void {
        scrollUp('scrollUp', 100);
    }

    navigateTo(path: string): void {
        setReturnAnchor('contact');
        this.router.navigate([path]);
    }

    rememberReturnAnchor(): void {
        setReturnAnchor('contact');
    }
}
