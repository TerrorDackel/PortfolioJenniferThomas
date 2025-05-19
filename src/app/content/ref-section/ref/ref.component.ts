import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-ref',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './ref.component.html',
    styleUrl: './ref.component.sass'
})
export class RefComponent {
    @Input() name!: string;
    @Input() project!: string;
    @Input() commit!: string;
}
