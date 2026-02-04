import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FooterComponent } from './footer.component';
import * as scrollMemory from '../utils/scroll-memory';

describe('FooterComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FooterComponent,
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
  });

  it('navigates to a path and stores the return anchor', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;
    const anchorSpy = spyOn(scrollMemory, 'setReturnAnchor');
    const navigateSpy = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

    component.navigateTo('/legal-notice');

    expect(anchorSpy).toHaveBeenCalledWith('footer');
    expect(navigateSpy).toHaveBeenCalledWith(['/legal-notice']);
  });

  it('scrolls to the top after navigation when not on the home route', fakeAsync(() => {
    const fixture = TestBed.createComponent(FooterComponent);
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
      window.scrollTo = () => {};
    }
    const rafSpy = spyOn(window, 'requestAnimationFrame').and.callFake(callback => {
      callback(0);
      return 0;
    });
    const scrollSpy = spyOn(window as any, 'scrollTo');

    component.scrollUp();
    tick();

    expect(navigateSpy).toHaveBeenCalledWith('/');
    expect(rafSpy).toHaveBeenCalled();
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  }));

  it('scrolls to the top when already on the home route', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;
    spyOnProperty(router, 'url', 'get').and.returnValue('/');
    const navigateSpy = spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    if (!window.scrollTo) {
      window.scrollTo = () => {};
    }
    const scrollSpy = spyOn(window as any, 'scrollTo');

    component.scrollUp();

    expect(navigateSpy).not.toHaveBeenCalled();
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
