import { Component } from '@angular/core';
import { ProgrammBoxComponent } from './programm-box/programm-box.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [ProgrammBoxComponent, TranslatePipe, TranslateDirective],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.sass'
})
export class SkillSetComponent {
  skills = [
    { iconSrc: 'assets/icons/angular.svg', name: 'Angular' },
    { iconSrc: 'assets/icons/typescript.svg', name: 'TypeScript' },
    { iconSrc: 'assets/icons/javascript.svg', name: 'JavaScript' },
    { iconSrc: 'assets/icons/html.svg', name: 'HTML' },
    { iconSrc: 'assets/icons/css.svg', name: 'CSS' },
    { iconSrc: 'assets/icons/git.svg', name: 'Git' },
    { iconSrc: 'assets/icons/nodejs.svg', name: 'Node.js' },
    { iconSrc: 'assets/icons/sass.svg', name: 'SASS' },
    { iconSrc: 'assets/icons/docker.svg', name: 'Docker' },
    { iconSrc: 'assets/icons/figma.svg', name: 'Figma' },
    { iconSrc: 'assets/icons/firebase.svg', name: 'Firebase' },
  ];
}
