import { Component } from '@angular/core';
import { RefComponent } from './ref/ref.component';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { DragScrollXDirective } from './drag-scroll-x.directive'; 

@Component({
    selector: 'app-ref-section',
    standalone: true,
    imports: [RefComponent, TranslatePipe, DragScrollXDirective], /* added directive here */
    templateUrl: './ref-section.component.html',
    styleUrl: './ref-section.component.sass'
})
export class RefSectionComponent {
    ref = [
        {
            name: 'Catalina Acosta',
            project: 'Project Kochwelt',
            commit: 'REF_SECTION.CATALINA.COMMIT'
        },
        {
            name: 'Caryen Song',
            project: 'Project Kochwelt',
            commit: 'REF_SECTION.CARYEN.COMMIT'
        },
        {
            name: 'Patrick Frey',
            project: 'Project Join',
            commit: 'REF_SECTION.PATRICK.COMMIT'
        },
        {
            name: 'Stephanie Englberger',
            project: 'Project Join',
            commit: 'REF_SECTION.STEPHIE.COMMIT'
        },
        {
            name: 'Jonathan Michutta',
            project: 'Project Join',
            commit: 'REF_SECTION.JON.COMMIT'
        }
    ];
}
