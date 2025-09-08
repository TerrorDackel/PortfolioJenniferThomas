import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './header.component.html',
    styleUrl: './header.component.sass'
})
export class HeaderComponent {
    menuValue: boolean = false;
    menuIcon: string = 'bi bi-list';
    currentLanguage: 'en' | 'de' = 'en';

    constructor(private translate: TranslateService, private router: Router) {
        this.currentLanguage = this.translate.currentLang as 'en' | 'de';
    }

    openMenu() {
        this.menuValue = !this.menuValue;
        this.menuIcon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    }

    closeMenu() {
        this.menuValue = false;
        this.menuIcon = 'bi bi-list';
    }

    switchToGerman() {
        this.setLanguage('de');
        this.closeMenu();
    }

    switchToEnglish() {
        this.setLanguage('en');
        this.closeMenu();
    }

    private setLanguage(lang: 'en' | 'de') {
        this.currentLanguage = lang;
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    }

    scrollUp(): void {
        if (this.router.url !== '/' && this.router.url !== '') {
            this.router.navigateByUrl('/').then(() => {
                requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
