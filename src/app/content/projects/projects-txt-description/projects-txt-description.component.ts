import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-projects-txt-description',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './projects-txt-description.component.html',
    styleUrl: './projects-txt-description.component.sass'
})
export class ProjectsTxtDescriptionComponent {
    @Input() name!: string;
    @Input() usedProgramms!: string[]; 
    @Input() description!: string;
    @Input() gitLink!: string;
    @Input() livetest!: string;
}
