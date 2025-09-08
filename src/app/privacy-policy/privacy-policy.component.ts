import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [ TranslatePipe ],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.sass'
})
export class PrivacyPolicyComponent {}
