import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    constructor(translate: TranslateService, router: Router) {
        const savedLang = localStorage.getItem('lang') || 'en';

        translate.addLangs(['de', 'en']);
        translate.setDefaultLang('en');
        translate.use(savedLang);

        router.events.pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd)
        ).subscribe(e => {
        if (['/legal-notice', '/privacy-policy'].includes(e.urlAfterRedirects))
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
