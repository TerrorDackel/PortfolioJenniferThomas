import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { scrollUp } from '../utils/scroll-to';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        TranslatePipe,
        TranslateDirective
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.sass'
})
export class HeaderComponent {
    menuValue: boolean = false;
    menuIcon: string = 'bi bi-list';
    currentLanguage: 'en' | 'de' = 'en';

    constructor(private translate: TranslateService) {
        const storedLang = localStorage.getItem('lang') as 'en' | 'de' | null;

        if (storedLang === 'de' || storedLang === 'en') {
            this.currentLanguage = storedLang;
            this.translate.use(this.currentLanguage);
        } else {
            this.currentLanguage = 'en';
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            localStorage.setItem('lang', 'en');
        }
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
        scrollUp('scrollUp', 100);
    }
}
