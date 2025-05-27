import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { scrollUp } from '../utils/scroll-to';

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

    constructor(private translate: TranslateService) {
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
        scrollUp('scrollUp', 100);
    }
}
