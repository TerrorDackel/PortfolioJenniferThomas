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
      commit: 'Kommentar von James Rugman klö bn jjhbv cvug bgki öoj ibvhjz trxd yxr ntj rmewm el' },
    { name: 'Evi Huber',
      project: 'Project Kochwelt',
      commit: 'Kommentar von Evi Huber alös aasjd asjdjifj sjkf lsjflk jewuewru s jskyhjskch zu h u  fu fttz f    gt  g ' }
  ];
}
