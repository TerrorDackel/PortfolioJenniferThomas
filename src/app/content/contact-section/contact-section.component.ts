import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { scrollUp } from '../../utils/scroll-to';
import { saveScrollPosition } from '../../utils/scroll-memory';
import { setReturnAnchor } from '../../utils/scroll-memory';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [ TranslatePipe, ReactiveFormsModule, HttpClientModule ],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.sass'
})
export class ContactSectionComponent {
    contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
        privacy: this.fb.control(false, { validators: Validators.requiredTrue, updateOn: 'change' })
    }, { updateOn: 'blur' });

    submitted = false;
    formSuccess = false;
    formError = false;

    focusedField: 'name' | 'email' | 'message' | null = null;

    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

    private isEmpty(ctrl: 'name'|'email'|'message'): boolean {
        const v = this.contactForm.get(ctrl)?.value as string | null | undefined;
        return !v || v.trim() === '';
    }

    showInlineRequired(ctrl: 'name'|'email'|'message'): boolean {
        const c = this.contactForm.get(ctrl);
        return !!(c && c.touched && c.invalid && this.isEmpty(ctrl) && this.focusedField !== ctrl);
    }

    onFocus(field: 'name'|'email'|'message') { this.focusedField = field; }
    onBlur(field: 'name'|'email'|'message')  { this.focusedField = null; }

    onPrivacyClick(): void {
        const el = document.activeElement as HTMLElement | null;
        if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.blur();
        }
        this.contactForm.updateValueAndValidity();
    }

    onSubmit() {
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
                setTimeout(() => { this.formSuccess = false; }, 5000);
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

}
