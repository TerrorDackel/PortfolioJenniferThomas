import { Component, Input } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.sass'
})
export class ProjectDescriptionComponent {
  @Input() name: string = '';
  @Input() usedProgramms!: string[];
  @Input() description: string = '';
  @Input() gitLink: string = '';
  @Input() projectImg: string = '';
  @Input() livetest: string = '';
}
