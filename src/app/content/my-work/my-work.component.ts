import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
    selector: 'app-my-work',
    standalone: true,
    imports: [ TranslatePipe, TranslateDirective ],
    templateUrl: './my-work.component.html',
    styleUrl: './my-work.component.sass'
})
export class MyWorkComponent {

}
