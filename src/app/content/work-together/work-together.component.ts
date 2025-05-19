import { Component } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: 'app-work-together',
    standalone: true,
    imports: [ TranslatePipe ],
    templateUrl: './work-together.component.html',
    styleUrl: './work-together.component.sass'
})

export class WorkTogetherComponent {
}
