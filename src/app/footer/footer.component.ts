import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { setReturnAnchor } from '../utils/scroll-memory';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterModule, TranslatePipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.sass'
})
export class FooterComponent {
    readonly currentYear = new Date().getFullYear();

    constructor(private router: Router) {}

    scrollUp(): void {
        if (this.router.url !== '/' && this.router.url !== '') {
            this.router.navigateByUrl('/').then(() => {
                requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    navigateTo(path: string): void {
        setReturnAnchor('footer');
        this.router.navigate([path]);
    }
    
}
