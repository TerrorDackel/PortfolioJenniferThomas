import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { observeAnimationReveal } from '../utils/scroll-animations';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [ TranslatePipe ],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.sass'
})
export class PrivacyPolicyComponent implements AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    ngAfterViewInit(): void {
        observeAnimationReveal('reveal-zoom', 0, this.platformId);
    }
}