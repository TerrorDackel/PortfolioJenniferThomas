import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { scrollUp } from '../utils/scroll-to' 

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterModule, TranslatePipe, TranslateDirective],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.sass'
})
export class FooterComponent {
    scrollUp(): void {
        scrollUp('scrollUp', 100)
    }
}
