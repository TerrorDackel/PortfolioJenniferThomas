
import { Component } from '@angular/core';
import { RefComponent } from './ref/ref.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
    selector: 'app-ref-section',
    standalone: true,
    imports: [RefComponent, TranslatePipe ],
    templateUrl: './ref-section.component.html',
    styleUrl: './ref-section.component.sass'
})
export class RefSectionComponent {
    ref = [
        {
            name: 'James Rugman',
            project: 'Project Kochwelt',
            commit: 'REF_SECTION.JAMES.COMMIT'
        },
        {
            name: 'Evi Huber',
            project: 'Project Kochwelt',
            commit: 'REF_SECTION.EVI.COMMIT'
        },
        {
            name: 'Franz Seidel',
            project: 'Project Kochwelt',
            commit: 'REF_SECTION.FRANZ.COMMIT'
        }
    ];
}
