import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
// import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ RouterLink, 
    // TranslatePipe, TranslateDirective, 
    ReactiveFormsModule, HttpClientModule,  NgIf, 
    // NgClass 
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.sass'
})
export class ContactSectionComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue]
  });

  submitted = false;
  formSuccess = false;
  formError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  onSubmit() {
    this.submitted = true;
    this.formSuccess = false;
    this.formError = false;
  
    if (!this.contactForm.valid) {
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
      },
      error: () => {
        this.formError = true;
      }
    });
  }
  
}
