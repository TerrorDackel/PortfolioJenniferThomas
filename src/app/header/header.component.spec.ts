import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let router: Router;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    translate = TestBed.inject(TranslateService);
  });

  it('toggles the mobile menu state and icon', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;

    expect(component.menuValue).toBeFalse();
    expect(component.menuIcon).toBe('bi bi-list');

    component.openMenu();
    expect(component.menuValue).toBeTrue();
    expect(component.menuIcon).toBe('bi bi-x');

    component.closeMenu();
    expect(component.menuValue).toBeFalse();
    expect(component.menuIcon).toBe('bi bi-list');
  });

  it('switches language to German and closes the menu', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    const useSpy = spyOn(translate, 'use');
    const storageSpy = spyOn(localStorage, 'setItem');

    component.menuValue = true;
    component.menuIcon = 'bi bi-x';

    component.switchToGerman();

    expect(component.currentLanguage).toBe('de');
    expect(component.menuValue).toBeFalse();
    expect(component.menuIcon).toBe('bi bi-list');
    expect(useSpy).toHaveBeenCalledWith('de');
    expect(storageSpy).toHaveBeenCalledWith('lang', 'de');
  });

  it('handles language keyboard activation', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    const germanSpy = spyOn(component, 'switchToGerman');

    component.onLanguageKeydown(new KeyboardEvent('keydown', { key: 'Enter' }), 'de');

    expect(germanSpy).toHaveBeenCalled();
  });

    it('marks the active language button with aria-pressed', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const component = fixture.componentInstance;
      component.currentLanguage = 'de';
      fixture.detectChanges();

      const germanButtons = fixture.nativeElement.querySelectorAll('button.de');
      const englishButtons = fixture.nativeElement.querySelectorAll('button.en');

      germanButtons.forEach((button: HTMLButtonElement) => {
          expect(button.getAttribute('aria-pressed')).toBe('true');
      });
      englishButtons.forEach((button: HTMLButtonElement) => {
          expect(button.getAttribute('aria-pressed')).toBe('false');
      });
  });

  it('marks the active language button with aria-pressed', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    component.currentLanguage = 'de';
    fixture.detectChanges();

    const germanButtons = fixture.nativeElement.querySelectorAll('button.de');
    const englishButtons = fixture.nativeElement.querySelectorAll('button.en');

    germanButtons.forEach((button: HTMLButtonElement) => {
      expect(button.getAttribute('aria-pressed')).toBe('true');
    });
    englishButtons.forEach((button: HTMLButtonElement) => {
      expect(button.getAttribute('aria-pressed')).toBe('false');
    });
  });

  it('scrolls to the top after navigation from another route', fakeAsync(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    spyOnProperty(router, 'url', 'get').and.returnValue('/legal-notice');
    const navigateSpy = spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = callback => {
        callback(0);
        return 0;
      };
    }
    if (!window.scrollTo) {
      window.scrollTo = () => undefined;
    }
    const rafSpy = spyOn(window, 'requestAnimationFrame').and.callFake(callback => {
      callback(0);
      return 0;
    });
      const scrollSpy = spyOn(window, 'scrollTo');

    component.scrollUp();
    tick();

    expect(navigateSpy).toHaveBeenCalledWith('/');
    expect(rafSpy).toHaveBeenCalled();
      const scrollArgs = scrollSpy.calls.mostRecent().args[0] as ScrollToOptions;
      expect(scrollArgs.top).toBe(0);
      expect(scrollArgs.behavior).toBe('smooth');
  }));

  it('scrolls to the top when already on the home route', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    spyOnProperty(router, 'url', 'get').and.returnValue('/');
    const navigateSpy = spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    if (!window.scrollTo) {
      window.scrollTo = () => undefined;
    }
      const scrollSpy = spyOn(window, 'scrollTo');

    component.scrollUp();

    expect(navigateSpy).not.toHaveBeenCalled();
      const scrollArgs = scrollSpy.calls.mostRecent().args[0] as ScrollToOptions;
      expect(scrollArgs.top).toBe(0);
      expect(scrollArgs.behavior).toBe('smooth');
  });
});
