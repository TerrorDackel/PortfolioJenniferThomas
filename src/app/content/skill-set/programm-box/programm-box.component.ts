import { Component, Input } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
    selector: 'app-programm-box',
    standalone: true,
    imports: [TranslatePipe, TranslateDirective],
    templateUrl: './programm-box.component.html',
    styleUrl: './programm-box.component.sass'
})
export class ProgrammBoxComponent {
    skills = [
        { iconSrc: 'assets/img/icon/1.png', name: 'Angular' },
        { iconSrc: 'assets/img/icon/2.png', name: 'TypeScript' },
        { iconSrc: 'assets/img/icon/3.png', name: 'JavaScript' },
        { iconSrc: 'assets/img/icon/4.png', name: 'HTML' },
        { iconSrc: 'assets/img/icon/5.png', name: 'Scrum' },
        { iconSrc: 'assets/img/icon/6.png', name: 'Firebase' },
        { iconSrc: 'assets/img/icon/7.png', name: 'Git' }, 
        { iconSrc: 'assets/img/icon/8.png', name: 'CSS' },
        { iconSrc: 'assets/img/icon/9.png', name: 'Rest Api' },
        { iconSrc: 'assets/img/icon/10.png', name: 'Material Design' },
        { iconSrc: 'assets/img/icon/11.png', name: 'Growth mindset' },
    ];
}