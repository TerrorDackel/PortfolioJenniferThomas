import { Component } from '@angular/core';
import { ProgrammBoxComponent } from './programm-box/programm-box.component';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: 'app-skill-set',
    standalone: true,
    imports: [ ProgrammBoxComponent, TranslatePipe ],
    templateUrl: './skill-set.component.html',
    styleUrl: './skill-set.component.sass'
})

export class SkillSetComponent {
}
