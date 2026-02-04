import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ContactSectionComponent } from './contact-section.component';

describe('ContactSectionComponent', () => {
  let httpMock: HttpTestingController;
  let originalIntersectionObserver: typeof IntersectionObserver | undefined;
  beforeEach(async () => {
    originalIntersectionObserver = window.IntersectionObserver;

    const mockObserver = class {
      constructor(_cb: IntersectionObserverCallback) {
        return;
      }
      observe(): void {
        return;
      }
      unobserve(): void {
        return;
      }
      disconnect(): void {
        return;
      }
    };
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: mockObserver
    });

    await TestBed.configureTestingModule({
      imports: [
        ContactSectionComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ]
    }).compileComponents();

      httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    if (originalIntersectionObserver) {
      window.IntersectionObserver = originalIntersectionObserver;
    } else {
      delete (window as { IntersectionObserver?: typeof IntersectionObserver }).IntersectionObserver;
    }
  });

  it('shows inline required errors after blur when field is empty', () => {
    const fixture = TestBed.createComponent(ContactSectionComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const nameControl = component.contactForm.get('name');
    nameControl?.markAsTouched();
    component.onFocus('name');
    expect(component.showInlineRequired('name')).toBeFalse();

    component.onBlur('name');
    expect(component.showInlineRequired('name')).toBeTrue();
  });

  it('blurs the active input when privacy checkbox is clicked', () => {
    const fixture = TestBed.createComponent(ContactSectionComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const input = document.createElement('input');
    document.body.appendChild(input);
    const blurSpy = spyOn(input, 'blur');
    const activeElementSpy = spyOnProperty(document, 'activeElement', 'get').and.returnValue(input);
    const updateSpy = spyOn(component.contactForm, 'updateValueAndValidity').and.callThrough();

    component.onPrivacyClick();

    expect(blurSpy).toHaveBeenCalled();
    expect(updateSpy).toHaveBeenCalled();

    activeElementSpy.and.callThrough();
    document.body.removeChild(input);
  });

  it('submits the form and shows success state on request success', fakeAsync(() => {
    const fixture = TestBed.createComponent(ContactSectionComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.contactForm.setValue({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello!',
      privacy: true
    });

    component.onSubmit();

    const req = httpMock.expectOne('https://formspree.io/f/xyzedkbw');
    expect(req.request.method).toBe('POST');
    req.flush({});
    tick();

    expect(component.formSuccess).toBeTrue();
    expect(component.formError).toBeFalse();
  }));

  it('sets an error state when the submit request fails', () => {
    const fixture = TestBed.createComponent(ContactSectionComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.contactForm.setValue({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello!',
      privacy: true
    });

    component.onSubmit();

    const req = httpMock.expectOne('https://formspree.io/f/xyzedkbw');
    req.flush('error', { status: 500, statusText: 'Server Error' });

    expect(component.formError).toBeTrue();
  });
});