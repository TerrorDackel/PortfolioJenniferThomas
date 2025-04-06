import { Component, Input } from '@angular/core';

// import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-projects-txt-description',
  standalone: true,
  imports: [ 
    // TranslatePipe, TranslateDirective
  ],
  templateUrl: './projects-txt-description.component.html',
  styleUrls: ['./projects-txt-description.component.sass']
})
export class ProjectsTxtDescriptionComponent {
  @Input() name: string = '';
  @Input() usedProgramms!: string[];
  @Input() description: string = '';
  @Input() gitLink: string = '';
  @Input() projectImg: string = '';
  @Input() livetest: string = '';
}
