import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { restoreScrollPosition } from 'src/app/utils/scroll-memory';

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [ RouterLink, TranslatePipe ],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.sass'
})

export class LegalNoticeComponent implements OnInit {

    ngOnInit(): void {
        restoreScrollPosition();
    }

}
