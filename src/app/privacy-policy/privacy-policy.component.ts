import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { restoreScrollPosition } from 'src/app/utils/scroll-memory';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [ RouterLink, TranslatePipe ],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.sass'
})

export class PrivacyPolicyComponent implements OnInit {

    ngOnInit(): void {
        restoreScrollPosition();
    }

}
