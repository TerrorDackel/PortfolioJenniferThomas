import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
    private translate = inject(TranslateService);
    private router = inject(Router);
    private platformId = inject(PLATFORM_ID);

    constructor() {
        const savedLang = isPlatformBrowser(this.platformId) ? localStorage.getItem('lang') || 'en' : 'en';

        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use(savedLang);

        this.router.events
            .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
            .subscribe(e => {
                if (['/legal-notice', '/privacy-policy'].includes(e.urlAfterRedirects)) {
                    if (isPlatformBrowser(this.platformId)) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            });
    }
}