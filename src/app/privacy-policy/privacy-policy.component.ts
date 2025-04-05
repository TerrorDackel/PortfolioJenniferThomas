import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink,
    //  TranslatePipe, TranslateDirective
    ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.sass'
})
export class PrivacyPolicyComponent {

}