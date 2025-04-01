import { Component } from '@angular/core';
import { RefComponent } from './ref/ref.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-ref-section',
  standalone: true,
  imports: [RefComponent, TranslatePipe, TranslateDirective],
  templateUrl: './ref-section.component.html',
  styleUrl: './ref-section.component.sass'
})
export class RefSectionComponent {
  ref = [
    { name: 'James Rugman', 
      project: 'Project Kochwelt',
      commit: 'commit Kochwelt von James commit Kochwelt von James commit Kochwelt von James' },
    { name: 'Evi Huber',
      project: 'Project Kochwelt',
      commit: 'commit Kochwelt von Evi commit Kochwelt von Evi commit Kochwelt von Evi' }
  ];
}
