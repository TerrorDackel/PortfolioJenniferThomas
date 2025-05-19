import { Component } from '@angular/core';
import { ProgrammBoxComponent } from './programm-box/programm-box.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
    selector: 'app-skill-set',
    standalone: true,
    imports: [ProgrammBoxComponent, 
        TranslatePipe, TranslateDirective
    ],
    templateUrl: './skill-set.component.html',
    styleUrl: './skill-set.component.sass'
})
export class SkillSetComponent {

}
