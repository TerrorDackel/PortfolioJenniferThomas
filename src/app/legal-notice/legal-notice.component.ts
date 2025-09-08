import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [ TranslatePipe ],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.sass'
})
export class LegalNoticeComponent {}
