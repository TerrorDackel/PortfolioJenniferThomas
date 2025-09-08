import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { scrollUp } from '../utils/scroll-to';
import { saveScrollPosition } from '../utils/scroll-memory';
import { setReturnAnchor } from '../utils/scroll-memory';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterModule, TranslatePipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.sass'
})
export class FooterComponent {
    constructor(private router: Router) {}

    scrollUp(): void {
        scrollUp('scrollUp', 100);
    }

    navigateTo(path: string): void {
        setReturnAnchor('footer');
        this.router.navigate([path]);
    }

}
