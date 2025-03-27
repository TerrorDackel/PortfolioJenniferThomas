import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.sass'
})
export class LegalNoticeComponent {

}