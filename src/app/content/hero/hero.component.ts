import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { observeAnimationReveal } from '../../utils/scroll-animations';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.sass'
})
export class HeroComponent implements AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    ngAfterViewInit(): void {
        observeAnimationReveal('reveal-zoom', 0, this.platformId);
    }
}
