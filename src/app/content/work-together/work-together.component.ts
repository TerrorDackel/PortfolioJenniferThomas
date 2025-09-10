import { Component, AfterViewInit } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { observeAnimationReveal } from '../../utils/scroll-animations';

@Component({
    selector: 'app-work-together',
    standalone: true,
    imports: [ TranslatePipe ],
    templateUrl: './work-together.component.html',
    styleUrl: './work-together.component.sass'
})

export class WorkTogetherComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        observeAnimationReveal('reveal-zoom', 0);
    }
}
