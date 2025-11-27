import { Component, AfterViewInit } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { observeAnimationReveal } from '../utils/scroll-animations';

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [ TranslatePipe ],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.sass'
})
export class LegalNoticeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        observeAnimationReveal('reveal-zoom', 0);
    }
}
