import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
    ngAfterViewInit(): void {
        observeAnimationReveal('reveal-zoom', 0);
    }
}