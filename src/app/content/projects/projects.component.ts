import { Component } from '@angular/core';
import { ProjectsTxtDescriptionComponent } from './projects-txt-description/projects-txt-description.component';
import { RevealOnceDirective } from '../../utils/reveal-once.directive';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [ProjectsTxtDescriptionComponent, RevealOnceDirective],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
    projects = [
        {
            name: 'Join',
            usedProgramms: ['Angular | TypeScript | HTML | CSS | Firebase'],
            description: 'PROJECTS.JOIN.DESCRIPTION',
            gitLink: 'https://github.com/TerrorDackel/DA_Join',
            projectImg: 'assets/img/join.png',
            livetest: 'http://www.join/jennifer-thomas.de/index.html'
        },
        {
            name: 'Pollo Loco',
            usedProgramms: ['JavaScript | HTML | CSS'],
            description: 'PROJECTS.POLLO.DESCRIPTION',
            gitLink: 'https://github.com/TerrorDackel/El-Pollo-Loco',
            projectImg: 'assets/img/el-pollo-loco.png',
            livetest: 'http://www.el-pollo-loco.jennifer-thomas.de/index.html'
        },
        {
            name: 'Pokedex',
            usedProgramms: ['JavaScript | HTML | CSS | API'],
            description: 'PROJECTS.POKEDEX.DESCRIPTION',
            gitLink: 'https://github.com/TerrorDackel/Pokedex',
            projectImg: 'assets/img/pokedex.png',
            livetest: 'http://www.pokedex/jennifer-thomas.de/index.html'
        }
    ];
}
