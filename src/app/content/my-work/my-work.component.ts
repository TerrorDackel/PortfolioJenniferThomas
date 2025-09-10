import { Component, AfterViewInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { observeAnimationReveal } from '../../utils/scroll-animations';

@Component({
    selector: 'app-my-work',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './my-work.component.html',
    styleUrl: './my-work.component.sass'
})
export class MyWorkComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        observeAnimationReveal('reveal-zoom', 1000);
    }
}
