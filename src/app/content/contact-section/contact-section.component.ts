import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.sass'
})
export class ContactSectionComponent {

}
